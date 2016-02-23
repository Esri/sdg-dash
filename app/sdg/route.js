import Ember from 'ember';

export default Ember.Route.extend({
  model(params, transition) {
    var queryParams = {
      ids: params.goal_id,
      targets: true,
      indicators: true,
      relateIndicatorsToTargets: true
    };
    return this.store.queryRecord('sdg', queryParams);
  },

  afterModel(sdg, transition) {
    console.log(sdg);
    let sesh = this.get('session');

    sesh.set('selected_sdg', sdg);
    
    let code = transition.queryParams.country_code;
    if (!code) {
      code = 'GLOBAL';
    }

    let geo_level = transition.queryParams.geo_level;
    if (geo_level) {
      sesh.set('selected_geo_level', geo_level);
    }

    // targets
    let targets = sdg.get('targets');
    let in_target = transition.queryParams.target_id;
    let selected_target = null;
    if (in_target) {
      selected_target = targets.filter(function (t) { return t.id === in_target; })[0];
    } else {
      selected_target = targets[0];
    }
    
    sdg.set('selected_target', selected_target);

    let goal = transition.params.sdg.goal_id;
    
    sesh.set('selected_country_code', code);
    sesh.set('selected_targets', targets);
    sesh.set('selected_target', selected_target);
    sesh.set('selected_target_description', targets[0].title);
    sesh.set('selected_sdg', sdg);
    
    let session = this.get('session');
    session.loadDashboardCards(code, goal, selected_target.id);
  },

  // attempt to remove "sticky" query params
  // https://guides.emberjs.com/v2.3.0/routing/query-params/#toc_sticky-query-param-values
  resetController(controller, isExiting) {
    if (isExiting) {
      // isExiting would be false if only the route's model was changing
      controller.set('country_code', null);
      controller.set('geo_level', null);
      controller.set('target_id', null);
    }
  }
});