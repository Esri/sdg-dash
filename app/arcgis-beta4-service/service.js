import Ember from 'ember';
import ajax from 'ic-ajax';
import ENV from 'sdg-dash/config/environment';

// import Map from 'esri4/Map';
// import SceneView from 'esri4/views/SceneView';
// import MapView from 'esri4/views/MapView';
// import QueryTask from 'esri4/tasks/QueryTask';
// import Query from 'esri4/tasks/support/Query';
// import GraphicsLayer from 'esri4/layers/GraphicsLayer';
// import PointSymbol3D from 'esri4/symbols/PointSymbol3D';
// import ObjectSymbol3DLayer from 'esri4/symbols/ObjectSymbol3DLayer';
// import FeatureLayer from 'esri4/layers/FeatureLayer';
// import ArcGISDynamicLayer from 'esri4/layers/ArcGISDynamicLayer';
// import ClassBreaksRenderer from 'esri4/renderers/ClassBreaksRenderer';
// import LayerDrawingOptions from 'esri4/layers/support/LayerDrawingOptions';

export default Ember.Service.extend({

  _basemapHash: {
    'Topographic': 'topo',
    'Dark Gray Canvas': 'dark-gray',
    'Streets': 'streets',
    'Imagery': 'satellite',
    'Imagery with Labels': 'hybrid',
    'Terrain': 'terrain',
    'Gray Canvas' : 'gray',
    'Oceans': 'oceans',
    'National Geographic' : 'national-geographic',
    'Open Street Map': 'osm'
  },

  _getSDGSummaryRenderer(r_json, layerOptions) {
    let renderer = ClassBreaksRenderer.fromJSON(r_json);
    // renderer.attributeField = layerOptions.rendererField;
    return renderer;
  },
  
  _getWebmapInfo(webmap) {
    let url = `http://www.arcgis.com/${ENV.apiOnlineRoot}${ENV.apiContentRoot}${ENV.apiUserItem}${webmap}/data`;
    return ajax({
      url: url,
      data: { f: 'json' },
      dataType: 'json'
    });
  },

  _parseWMInfo(response, settings) {
    let layers = response.operationalLayers.map(function (l) {
      if (l.layerType === 'ArcGISMapServiceLayer') {
        let visibleLayers = [];
        if (l.layers && l.layers.length > 0) {
          l.layers.forEach(function(sublayer) {
            if (sublayer.defaultVisibility) {
              visibleLayers.push(sublayer.id);
            }
          }.bind(this));
        }

        let newLayer = new ArcGISDynamicLayer({
          url: l.url,
          visible: l.visibility,
          visibleLayers: visibleLayers
        });

        let renderer = null;
        if (settings.isSDGSummaryMap) {
          let renderer_json = l.layers[0].layerDefinition.drawingInfo.renderer;
          renderer = this._getSDGSummaryRenderer(renderer_json, settings.options.layerOptions);

          let opts_arr = [];
          let drawingOpts = new LayerDrawingOptions();
          drawingOpts.renderer = renderer;

          opts_arr[0] = drawingOpts;

          return { layer: newLayer, drawingOptions: opts_arr };
        }

        return newLayer;


      } else if (l.layerType === 'ArcGISFeatureLayer') {
        return new FeatureLayer({
          url: l.url,
          visible: l.visibility
        });
      }
    }.bind(this));

    let basemap = this._basemapHash[response.baseMap.title];

    return {
      mapOptions: {
        basemap: basemap
      },
      layers: layers
    };
  },

  createMap(webmap, settings, el) {
    this._getWebmapInfo(webmap, settings)
      .then(function (response) {
        let info = this._parseWMInfo(response, settings);
        this._initMap(info, el);
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      })
  },

  _initMap(info, el) {
    let _map = new Map(info.mapOptions);
    this.set('map', _map);

    let callout = null;
    info.layers.forEach(function (layer) {
      if (layer.drawingOptions) {
        callout = layer;
        _map.add( layer.layer );
      } else {
        _map.add( layer );  
      }
      
    }.bind(this));

    let _sceneView = new MapView({
      container: el,
      map: _map
    });

    _sceneView.then(function () {
      if (callout) {
        callout.layer.layerDrawingOptions = callout.drawingOptions;
      }
    }.bind(this));
  },

  createMapOld(mapOptions, sceneOptions) {     
    let _map = new Map(mapOptions);
    this.set('map', _map);

    sceneOptions.map = _map;
    let _sceneView = new SceneView(sceneOptions);
    _sceneView.ui.components = ['compass'];
    return {
      map: _map,
      scene: _sceneView
    }
  },

  addGlobalLayer() {
    let pointsLayer = new GraphicsLayer();
    this.set('pointsLayer', pointsLayer);

    this.get('map').add(pointsLayer);

    let query = new Query({
      where: 'AVG_ALL_SDGs IS NOT NULL',
      outFields: ['AVG_ALL_SDGs'],
      returnGeometry: true
    });

    let queryUrl = 'http://arcgis-sdgs-385255865.us-east-1.elb.amazonaws.com/arcgis/rest/services/MISC/UNSDSN_PRELIM_GLOBAL_SDG_INDEX_PTS/MapServer/0';
    let task = new QueryTask(queryUrl);

    task.execute(query)
      .then(this._handleQueryResponse.bind(this), this._handleQueryError.bind(this));
  },

  _handleQueryResponse(response) {
    console.log(response);

    let graphics = response.features.map(function (feature) {
      // if (feature.attributes.AVG_ALL_SDGs !== null) {
        feature.symbol = new PointSymbol3D({
          symbolLayers: [ 
            new ObjectSymbol3DLayer({
              material: {
                color: [0,255,0,0.50]
              },
              resource: {
                primitive: 'cylinder'
              },
              width: 100000,
              height: feature.attributes.AVG_ALL_SDGs * 20000
            })
          ]
        });
        return feature;
      // }
    }.bind(this));

    let lyr = this.get('pointsLayer');
    lyr.add(graphics);
  },

  _handleQueryError(error) {
    console.log('error getting global sdg index averages', error);
  },

  destroyMap() {
    // if (Ember.isArray(handlers)) {
    //   handlers.forEach((handler) => {
    //     if (handler.remove) {
    //       handler.remove();
    //     }
    //   });
    //   handlers.length = 0;
    //   handlers = null;
    // }

    let map = this.get('map');
    if (map && map.destroy) {
      map.destroy();
      map = null;
    }
    return map;
  },

  getBasemapDefinition(basemap) {
    return esriBasemaps[basemap];
  }
});