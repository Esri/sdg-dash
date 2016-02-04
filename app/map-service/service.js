import Ember from 'ember';
import Map from 'esri/map';
import FeatureLayer from 'esri/layers/FeatureLayer';
import GraphicsLayer from 'esri/layers/GraphicsLayer';
import arcgisUtils from 'esri/arcgis/utils';

export default Ember.Service.extend({
  
  handlers: [],

  createMap(el, opts) {
    opts = Object.assign({
      minZoom: 2,
      wrapAround180: true,
      smartNavigation: false,
      navigationMode: 'css-transforms',
      fitExtent: true,
      logo: false,
      showAttribution: false
    }, opts);
    var map = new Map(el, opts);
    this.handlers.push(map.on('load', this.onMapLoaded.bind(this)));
    this.set('map', map);
    return map;
  },

  createArcGISMap(el, webmap, opts) {
    return arcgisUtils.createMap(webmap, el, opts)
      .then(function (response) {
        this.set('map', response.map);
        return response;
      }.bind(this));
  },

  onMapLoaded() {
    this.map.disableScrollWheelZoom();
    //this.map.infoWindow.titleInBody = false;
    this.map.infoWindow.anchor = 'right';
    // this.trigger('map-loaded');
  },

  onMapExtentChanged() {
    let gExt = this.map.geographicExtent;
    let ext = Ember.Object.create({
      xmin: round(gExt.xmin, 3),
      ymin: round(gExt.ymin, 3),
      xmax: round(gExt.xmax, 3),
      ymax: round(gExt.ymax, 3),
    });
    this.set('extent', ext);
    //this.trigger('map-extent-changed', Date.now());
  },

  destroyMap() {
    let map = this.get('map');
    this.handlers.forEach((handler) => { handler.remove(); });
    if (map) {
      map.destroy();
      this.set('map', null);
    }
  },

  addFeatureLayer(url, opts, renderer) {
    let map = this.get('map');
    let layer = new FeatureLayer(url, opts);
    if (renderer) {
      layer.setRenderer(renderer);
    }
    return map.addLayer(layer);
  },

  addGraphicsLayer(renderer) {
    let map = this.get('map');
    let gl = new GraphicsLayer();
    if (renderer) {
      gl.setRenderer(renderer);
    }
    return map.addLayer(gl);
  }
});