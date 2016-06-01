// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific 
// language governing permissions and limitations under the License.

import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['geo_group', 'geo_value', 'geo_level', 'target_id'],
  
  geo_group: null,
  geo_value: null,
  geo_level: null,
  target_id: null,

  actions: {

    changeTarget(target) {
      this.model.set('selected_target', target);
      
      let params = {
        queryParams : {
          geo_group : this.geo_group || 'countries',
          geo_value : this.geo_value || 'GLOBAL',
          target_id : target.id
        }
      };
      if (target.id === 'SDG Index') {
        params.queryParams = {
          geo_group : 'countries',
          geo_value : 'GLOBAL',
          target_id : null
        };
      }

      this.transitionToRoute(params)
        .then(function () {
          this.get('session').loadDashboardCards(this.geo_group, this.geo_value, this.model.get('id'), target.id);
        }.bind(this));
    },

    changeSdg(selected) {
      console.log('changeSdg from controller::sdg', selected);
      const params = {
        queryParams: { 
          geo_group : this.geo_group, 
          // geo_value: this.geo_value, 
          geo_value: 'GLOBAL', 
          target_id: null 
        }
      };
      this.transitionToRoute('sdg', selected, params);
    },

    goToGeography(geography_group, qp_value) {
      const svc = this.get('session');
      let selected_target = svc.get('selected_target');

      let target_id = null;
      if (selected_target.id === 'SDG Index') {
        selected_target = null;
      } else {
        target_id = selected_target.id;
      }

      const params = {
        queryParams : {
          geo_group : geography_group,
          geo_value : qp_value,
          target_id : target_id
        }
      };

      this.transitionToRoute(params)
        .then( function(){
          this.get('session').loadDashboardCards(geography_group, qp_value, this.model.get('id'), target_id);
        }.bind(this));
    },

    goToGeoLevel(geo_level) {
       const params = {
        queryParams: {
          geo_level: geo_level
        }
       };
       
       this.transitionToRoute(params)
        .then(function () {
          this.get('session').reconfigureAtGeoLevel(geo_level);
        }.bind(this));
    }
  }
});
