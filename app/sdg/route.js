// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific 
// language governing permissions and limitations under the License.

import Ember from 'ember';
import ENV from 'sdg-dash/config/environment';
import colorUtils from 'sdg-dash/utils/colors';
import ajax from 'ic-ajax';
import Cookies from 'npm:js-cookie';

export default Ember.Route.extend({
  
  i18n: Ember.inject.service(),

  queryParams: {
    target_id: {
      refreshModel: true
    }
  },

  fetchGoal(id, locale) {
    return ajax({
      url: ENV.sdgApi + 'goals',
      data: {
        ids: id,
        locale: locale
      },
      dataType: 'json'
    });
  },

  i18nChanged: Ember.observer('i18n.locale', function () {
    const locale = this.get('i18n.locale');
    console.log('locale is now', locale);

    const sel_sdg = this.get('session').get('selected_sdg')
    if (!sel_sdg) {
      return;
    }
    const id = sel_sdg.get('id');
    this.fetchGoal(id, locale)
      .then(function(response) {
        const data = response.data;
        const title = data[0].title;
        const short = data[0].short;

        this.modelFor('sdg').set('title', short);
        this.modelFor('sdg').set('description', title);

      }.bind(this))
      .catch(function(error) {
        console.log('error fetching words for locale', error);
      });
  }),

  model(params) {
    let locale = Cookies.get('current_locale');
    if (!locale) {
      locale = this.get('i18n.locale');
    }
    const queryParams = {
      locale: locale,
      ids: params.goal_id,
      targets: true,
      indicators: true,
      includeMetadata: false
    };
    return this.store.queryRecord('sdg', queryParams);
  },

  afterModel(sdg, transition) {
    console.log(sdg);
    const goal = transition.params.sdg.goal_id;

    let svc = this.get('session');
    svc.set('selected_sdg', sdg);

    // reset all the cards!!
    svc.set('cards', []);
    
    // handle in-bound query params if they exist
    const geo_group = transition.queryParams.geo_group || 'countries';
    const geo_value = transition.queryParams.geo_value || 'GLOBAL';    
    const geo_level = transition.queryParams.geo_level || null;
    svc.setProperties({
      selected_geo_group : geo_group,
      selected_geo_value : geo_value,
      selected_geo_level : geo_level
    });

    // targets
    const targets = sdg.get('targets');
    const in_target = transition.queryParams.target_id;
    let selected_target;
    if (in_target) {
      selected_target = targets.filter(function (t) { return t.id === in_target; })[0];
    } else {
      selected_target = {id: 'SDG Index'};
      svc.set('selected_geo_value', 'GLOBAL');
    }
    
    // keep this in
    sdg.set('selected_target', selected_target);

    svc.setProperties({
      selected_targets : targets,
      selected_target : selected_target,
      selected_target_description : targets[0].title
    });
    
    const t_id = selected_target ? selected_target.id : null;

    this._themePage(sdg.get('colorHex'));

    svc.loadDashboardCards(geo_group, geo_value, goal, t_id);

  },

  _themePage(dark_color) {
    const light_color = colorUtils.shadeColor(dark_color, 0.75);
    console.log('light color', light_color, 'dark_color', dark_color);

    Ember.$('.country-select-container .bootstrap-select > button').css('color', dark_color);
    Ember.$('.country-select-container .bootstrap-select > button').css('border-color', dark_color);
  },

  // attempt to remove "sticky" query params
  // https://guides.emberjs.com/v2.3.0/routing/query-params/#toc_sticky-query-param-values
  resetController(controller, isExiting) {
    if (isExiting) {
      // isExiting would be false if only the route's model was changing
      controller.set('geo_group', null);
      controller.set('geo_value', null);
      controller.set('geo_level', null);
      controller.set('target_id', null);
    }
  }
});