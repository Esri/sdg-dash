import Ember from 'ember';
import arcgisUtils from 'esri/arcgis/utils';
import esriBasemaps from 'esri/basemaps';

export default Ember.Service.extend({
  createMap(webMap, elem, options) {
    if (!options) {
      options = {
        mapOptions: {}
      };
    }
    options.mapOptions.smartNavigation = false;
    return arcgisUtils.createMap(webMap, elem, options);
  },

  destroyMap(map, handlers) {
    if (Ember.isArray(handlers)) {
      handlers.forEach((handler) => {
        if (handler.remove) {
          handler.remove();
        }
      });
      handlers.length = 0;
      handlers = null;
    }

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