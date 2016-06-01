// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific 
// language governing permissions and limitations under the License.

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