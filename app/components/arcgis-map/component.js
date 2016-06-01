// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific 
// language governing permissions and limitations under the License.

import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['arcgis-map-component'],

  arcgisMapService: Ember.inject.service(),

  init() {
    this._super(...arguments);

    // array to store map event handlers
    this.handlers = [];
  },

  didInsertElement() {
    // parse properties
    let webmap = this.get('webmap');
    const options = this.get('options');

    const no_data = this.get('no_data') || null;
    if (no_data) {
      webmap = '01e686d4ca0947cb827ac3ecf4766b87';
    }

    // init map
    const svc = this.get('arcgisMapService');
    if (!webmap) {
      return;
    }

    svc.createMap(webmap, this.element, options).then((response) => {
      this.map = response.map;
      this.map.disableScrollWheelZoom();

      // add servers to cors config
      // esri.config.defaults.io.corsEnabledServers
      response.itemInfo.itemData.operationalLayers.forEach(function(layer) {
        esri.config.defaults.io.corsEnabledServers.push(layer.url);
      });
      
      this.itemInfo = response.itemInfo;
      if (response.clickEventHandle) {
        this.handlers.push(response.clickEventHandle);
      }
    });
  },

  willDestroyElement() {
    const svc = this.get('arcgisMapService');
    svc.destroyMap(this.map, this.handlers);
    this.itemInfo = null;
  }
});