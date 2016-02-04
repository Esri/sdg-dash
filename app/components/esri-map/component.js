import Ember from 'ember';
import SimpleFillSymbol from 'esri/symbols/SimpleFillSymbol';
import SimpleLineSymbol from 'esri/symbols/SimpleLineSymbol';
import SimpleRenderer from 'esri/renderers/SimpleRenderer';
import Graphic from 'esri/graphic';
import Color from 'esri/Color';
import graphicsUtils from 'esri/graphicsUtils';
import Query from 'esri/tasks/query';
import QueryTask from 'esri/tasks/QueryTask';
import Point from 'esri/geometry/Point';
import SpatialReference from 'esri/SpatialReference';
import StatisticDefinition from 'esri/tasks/StatisticDefinition';

export default Ember.Component.extend({

  dashboardsDidChange2: function() {
    
    let dashboards = this.get('session').get('dashboards');
    if (dashboards.length === 0) {
      console.log('no dashboards for target');
      this.setNoData();
      return;
    }

    // first get dashboard for target
    let target = this.get('session').get('selected_target');
    let indicator_dashboards = dashboards.filter(function (d) {
      return d.target === target;
    })[0];

    if (!indicator_dashboards) {
      console.log('no dashboards found for target :: ' + target);
      this.setNoData();
      return;
    }

    // then filter that to geo level (if there; if not, just use the first one)
    let selected_geo_level = Ember.$('#geo-levels-selector').val();
    let dashboard = null;
    if (selected_geo_level) {
      dashboard = indicator_dashboards.levels.filter(function (d) {
        return d.title === selected_geo_level;
      })[0];
    } else {
      dashboard = indicator_dashboards.levels[0];
    }

    if (!dashboard) {
      console.log('no dashboard found for target :: ', target);
      return;
    }

    $('div.container.status-container > .row:nth-child(3) ~ div').fadeIn();

    this.updateMap(dashboard);

  // }.observes('session.selected_country_name', 'session.selected_target'),
  },

  dashboardsDidChange: Ember.observer('session.selected_dashboard', function() {
    var dash = this.get('session').get('selected_dashboard');
    this.updateMap(dash);
  }),

  noDataHasChanged: Ember.observer('session.no_data', function () {
    var no_data = this.get('session').get('no_data');
    var els = Ember.$('div.container.status-container > .row:nth-child(3) ~ div').fadeIn();
    if (no_data) {
      els.fadeIn();
    } else {
      els.fadeOut();
    }
  }),

  mapService: Ember.inject.service(),

  didInsertElement(){
    console.log('esri-map-component didInsertElement');

    // initialize bootstrap popovers
    Ember.$('[data-toggle="popover"]').popover();
  },

  updateMap(dashboard) {
    console.log('updating map with :: ', dashboard);
    let svc = this.get('mapService');
    svc.destroyMap();

    var webmap = dashboard.webmap;
    svc.createArcGISMap(this.element, webmap, {
      mapOptions: {
        showAttribution: false,
        logo: false
      }
    })
      .then(function (response) {

        this.get('session').set('map_panel_title', dashboard.map_panel_title);
        this.get('session').set('map_panel_info', dashboard.info);

        let layers = response.itemInfo.itemData.operationalLayers;
        dashboard.items.forEach(function (item) {
          if (item.type === 'chart') {
            this.createChart(item, layers);
          } else if (item.type === 'summary-statistic') {
            this.createStat(item, layers);
          }
        }, this);

      }.bind(this));

  },

  createChart(chartConfig, layers) {
    var newChart = new Cedar({ type: chartConfig.chart_type });

    var layer = layers.filter(function (l) { 
      return l.itemId === chartConfig.layerItemId;
    })[0];
    
    var url = layer.url;
    if (layer.layerType === 'ArcGISMapServiceLayer') {
      url = layer.url + '/' + chartConfig.layerItemIndex;
    } 

    // var url = (layer.layerType === "ArcGISMapServiceLayer") ? layer.url + '/' + chartConfig.layerItemIndex : layer.url;

    // 10.3 Map Services do not allow for Pagination -- boo-urns
    if (chartConfig.query.mapServiceQueryLimit) {
      var task = new QueryTask(url);
      var query = new Query();
      query.where = chartConfig.query.where;
      query.orderByFields = chartConfig.query.orderByFields;
      query.outFields = chartConfig.query.outFields;
      query.returnGeometry = false;
      
      var data = [];
      task.execute(query, 
        function(response) {
          if (response.features.length > 0) {
            response.features = response.features.slice(0, chartConfig.query.mapServiceQueryLimit);
          }

          var dataset = {
            data: response,
            mappings: chartConfig.mappings
          };

          this._showChartDataset(newChart, chartConfig.elementId, dataset);

        }.bind(this),
       function(error) {
        console.log('error querying for limited features because of 10.3 map service', error);
       });
    } else {
      var dataset = {
        url: url,
        query: chartConfig.query,
        mappings: chartConfig.mappings
      };

      this._showChartDataset(newChart, chartConfig.elementId, dataset);
    }

    this.get('session').set(chartConfig.elementId + '_title', chartConfig.panel_title);
    this.get('session').set(chartConfig.elementId + '_info', chartConfig.info);
    
  },

  _showChartDataset(chart, elId, dataset) {
    chart.dataset = dataset;

    chart.show({ elementId: '#' + elId });
    
    var hex = this.get('session').get('selected_sdg').get('colorHex');
    // hex = '#00FF00';
    chart.override = {
      "marks" : [
        {
          "properties" : {
            "hover" : { "fill" : { "value" : hex }, "fillOpacity" : {"value" : 0.5}},
            "update" : { "fill" : { "value" : hex }, "fillOpacity" : {"value": 1}}
          }
        }
      ]
    };
  },

  createStat(statConfig, layers) {
    
    this.get('session').set(statConfig.elementId + '_title', statConfig.panel_title);
    this.get('session').set(statConfig.elementId + '_info', statConfig.info);

    var layer = layers.filter(function (l) { return l.itemId === statConfig.layerItemId; })[0];
    var defConfig = statConfig.query.outStatistics[0];
    var query = new Query();
    var statsDef = new StatisticDefinition();
    statsDef.onStatisticField = defConfig.onStatisticField;
    statsDef.statisticType = defConfig.statisticType;
    statsDef.outStatisticFieldName = defConfig.outStatisticFieldName;

    query.where = '1=1';
    query.outStatistics = [statsDef];

    // var url = (layer.layerType === 'ArcGISMapServiceLayer') ? layer.url + '/' + statConfig.layerItemIndex : layer.url;
    var url = layer.url;
    if (layer.layerType === 'ArcGISMapServiceLayer') {
      url = layer.url + '/' + statConfig.layerItemIndex;
    } 
    
    if (layer.layerType === 'ArcGISMapServiceLayer') {
      var task = new QueryTask(url);
      task.execute(query, 
        function(response) {
          var value = response.features[0].attributes[defConfig.outStatisticFieldName];
          Ember.$('.' + statConfig.elementId).html(value.toFixed(0));
        },
        function (error) {
          console.log('error querying map service for chart data', error);
        });
    } else {
      layer.layerObject.queryFeatures(query)
        .then(function (response) {
          var value = response.features[0].attributes[defConfig.outStatisticFieldName];
          Ember.$('.' + statConfig.elementId).html(value.toFixed(0));
        }.bind(this));
    }
  },

  resetMapToGlobal() {
    this.map.centerAndZoom(new Point(17.35156249997251, 4.623249112524427, new SpatialReference(4326)), 2);
  },

  willDestroyElement() {
    let svc = this.get('mapService');
    if (svc) {
      svc.destroyMap();
    }
  }
});
