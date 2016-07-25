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

export default Ember.Component.extend({

  map: null,

  didInsertElement() {
    const webmapId = 'cae2a169acfc4263ad66bebc2a1b9c7e';
    const options = {
      mapOptions: {
        slider : true,
        logo : false,
        showAttribution : false,
        smartNavigation : false
      }
    };

    console.log('rendering landing page Map ..');

    esri.config.defaults.io.corsEnabledServers.push('http://arcgis-sdgs-385255865.us-east-1.elb.amazonaws.com/');
    arcgisUtils.createMap(webmapId, this.element, options)
      .then( (response) => {
        let map = response.map;
        map.disableScrollWheelZoom();
        this.set('map', map);
      });
  },

  willDestroyElement() {
    const map = this.get('map');
    if (map) {
      map.destroy();
    }
  }
});
