// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific 
// language governing permissions and limitations under the License.

import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Component.extend({

  didInsertElement() {
    let settings = this.get('model.component.settings');
    if (!settings.query) {
      console.log('no query found for summary-stat-card; exiting ..');
      return;
    }
    this.set('settings', settings);

    // let class_names = this.get('model.component.class_names');
    // if (class_names) {
    //   Ember.$(this.element + ' .stat-value').addClass(class_names);
    // }

    this._fetchData();
  },

  _fetchData() {
    let settings = this.get('settings');
    let stats = settings.query.outStatistics;

    let data = {};
    data.f = 'json';

    data.outStatistics = JSON.stringify( stats );

    ajax({
      url: settings.url + '/query',
      data: data,
      dataType: 'json'
    })
      .then(this._handleQueryResponse.bind(this))
      .catch(this._handleQueryError.bind(this));
  },

  _formatAsNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  _handleQueryResponse(response) {
    if (response.features.length > 0) {
      let settings = this.get('settings');
      let feature = response.features[0];
      let field_name = settings.query.outStatistics[0].outStatisticFieldName;
      let stat_value = feature.attributes[field_name];
      
      if (isNaN(stat_value)) {
        stat_value = parseFloat(stat_value);
      }

      if (settings.post_process) {
        if (settings.post_process.operation === 'multiply') {
          stat_value = stat_value * settings.post_process.value;
        } else if (settings.post_process.operation === 'divide') {
          stat_value = stat_value / settings.post_process.value;
        }
      }

      if (settings.display_format) {
        if (!Ember.isNone(settings.display_format.decimal_places)) {
          stat_value = this._formatAsNumber( stat_value.toFixed(settings.display_format.decimal_places) );
        }

        if (settings.display_format.suffix) {
          this.set('stat_suffix', Ember.String.htmlSafe(settings.display_format.suffix));  
        }
      }

      this.set('stat_value', stat_value);
    }

  },

  _handleQueryError(error) {
    console.log('error querying for summary stat', error);
  }
});
