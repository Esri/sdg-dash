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
import ENV from '../config/environment';

export default Ember.Service.extend({
  
  available_dashboard_levels: [],
  no_data: true,

  cards: [],
  available_geo_levels: [],
  
  selected_geo_group: null,
  selected_geo_value: null,
  selected_geo_level: null,

  locale_label: 'English',

  loadDashboardCards(geography_group, geo_value, goal, target_id) {
    this.set('isLoadingCards', true);

    // START - for testing loading indicator
    // return; //keeps the loading indicator on the page
    // Ember.run.later(this, function() {

      this.loadDashboards(geography_group, geo_value, goal, target_id)
        .then(function (response) {
          
          this.set('available_dashboards', response.data);
          
          let cards = [];
          
          if (response.data[0] && response.data[0].items) {
            cards = response.data[0].items;
            this.set('available_geo_levels', response.data.map(function (d) { return d.title; }));
          }
          this.set('cards', cards);

          this.set('isLoadingCards', false);
        }.bind(this));

    // END - for testing loading indicator
    // }, 2000);
  },

  loadAvailableGeographies() {
    return ajax({
      url: ENV.sdgDashboardsApi + 'geographiesWithData',
      dataType: 'json'
    });
  },

  loadDashboardsAndReconfigure(country_code, goal) {
    this.loadDashboards(country_code, goal)
      .then(this.reconfigure.bind(this));
  },

  loadDashboards(geography_group, geo_value, goal, target_id) {
    let data = {
      geography: geography_group,
      geo_value: geo_value,
      goal: goal
    };

    if (target_id && target_id !== 'SDG Index') {
      data['target_id'] = target_id;
    }

    return ajax({
      url: ENV.sdgDashboardsApi + 'dashboards',
      data: data,
      dataType: 'json'
    })
      .then(function(response){
        return Ember.RSVP.resolve(response);
      });
  },

  getIndicatorsForTarget(target_id, metadata) {
    let data = {
      targets : target_id,
      includeMetadata: metadata || false
    };

    return ajax({
      url: ENV.sdgApi + 'indicators',
      data: data,
      dataType: 'json'
    });
  },

  getMetadata(indicator_id) {
    let data = {
      ids: indicator_id,
      includeMetadata: true
    };
    return ajax({
      url: ENV.sdgApi + 'indicators',
      data: data,
      dataType: 'json'
    });
  },

  reconfigure(response) {
    let levels = [],
      dash;

    if (response.data.length > 0 && response.data[0].levels[0]) {
      let r_levels = response.data[0].levels;
      levels = r_levels.map(function (l) {return l.title;});
      
      let sel_geo_level = this.get('selected_geo_level');
      if (!sel_geo_level) {
        dash = response.data[0].levels[0];  
      } else {
        dash = response.data[0].levels.filter(function (l) { return l.title === sel_geo_level; })[0];
      }
      
      this.set('selected_dashboard', dash);

      this.set('available_dashboard_levels', response.data[0].levels);
    }
   
    this.set('available_geo_levels', levels);

    this.set('no_data', (dash) ? true : false);    
  },

  reconfigureAtGeoLevel(level) {
    const dashboards = this.get('available_dashboards');
    const new_dash = dashboards.filter(
      function (b) { return b.title === level; }
    );

    if (!new_dash || !new_dash[0]) {
      return;
    }

    this.set('cards', new_dash[0].items);
  }
});