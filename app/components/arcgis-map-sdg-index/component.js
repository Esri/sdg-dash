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

  arcgisMapSdgIndexService: Ember.inject.service(),

  init() {
    this._super(...arguments);

    // array to store map event handlers
    this.handlers = [];
  },

  didInsertElement() {
    // parse properties
    const webmap = this.get('webmap');
    const c = this.get('component');
    const settings = c.settings;

    // init map
    const svc = this.get('arcgisMapSdgIndexService');
    if (!webmap) {
      return;
    }
    svc.createMap(webmap, this.element, settings.options).then((response) => {
      this.map = response.map;
      this.map.disableScrollWheelZoom();
      
      this.itemInfo = response.itemInfo;
      if (response.clickEventHandle) {
        this.handlers.push(response.clickEventHandle);
      }

      const goal = this.get('container').lookup('router:main').router.state.params.sdg.goal_id;
      const hex_color = this.get('session').get('selected_sdg').get('colorHex');
      const layer_loc = settings.sdgIndexLayerLocation;
      const layer = this.itemInfo.itemData.operationalLayers[ layer_loc[0] ].layerObject;
      const layer_url = layer.url + '/' + layer_loc[1];

      svc.renderSdgLayer(goal, hex_color, layer, layer_url);

    });
  },

  willDestroyElement() {
    const svc = this.get('arcgisMapSdgIndexService');
    svc.destroyMap(this.map, this.handlers);
    this.itemInfo = null;
  }
});