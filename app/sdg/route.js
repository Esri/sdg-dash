import Ember from 'ember';
import colorUtils from 'sdg-dash/utils/colors';

export default Ember.Route.extend({
  
  queryParams: {
    target_id: {
      refreshModel: true
    }
  },

  model(params) {
    const queryParams = {
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