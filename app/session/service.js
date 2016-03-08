import Ember from 'ember';
import ajax from 'ic-ajax';
import ENV from '../config/environment';

export default Ember.Service.extend({
  
  // selected_country_code: 'GLOBAL',
  // selected_country_name: 'Global',
  // selected_target: '',
  // selected_target_description: '',
  // selected_targets: [],
  // selected_country_name: '',
  // dashboard_charts: null,
  // chart_one_title: '',
  // selected_sdg: null,
  
  available_dashboard_levels: [],
  selected_geo_level: null,
  no_data: true,

  cards: [],
  available_geo_levels: [],
  
  selected_geo_group: null,
  selected_geo_value: null,
  selected_geo_level: null,

  loadDashboardCards(geography_group, geo_value, goal, target_id) {
    this.loadDashboards(geography_group, geo_value, goal, target_id)
      .then(function (response) {
        console.log(response);
        let cards = [];
        if (response.data[0] && response.data[0].items) {
          cards = response.data[0].items;
          this.set('available_geo_levels', response.data.map(function (d) { return d.title; }));
        }
        this.set('cards', cards);
      }.bind(this));
  },

  loadAvailableGeographies() {
    return ajax({
      url: ENV.sdgApi + 'geographiesWithData',
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
      url: ENV.sdgApi + 'dashboards',
      data: data,
      dataType: 'json'
    })
      .then(function(response){
        return Ember.RSVP.resolve(response);
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
        dash = response.data[0].levels.filter(function (l) { return l.title === sel_geo_level })[0];
      }
      
      this.set('selected_dashboard', dash);

      this.set('available_dashboard_levels', response.data[0].levels);
    }
   
    this.set('available_geo_levels', levels);

    this.set('no_data', (dash) ? true : false);    
  },

  reconfigureAtGeoLevel() {
    // let level = this.get('selected_geo_level');
    let board = this.get('selected_dashboard');
    // let new_dash = board.levels.filter(function (b) { return b.title === level });

    this.set('selected_dashboard', board);
  }
});