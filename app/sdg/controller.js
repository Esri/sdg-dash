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
          geo_value: this.geo_value, 
          target_id: null }
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
       this.transitionToRoute({queryParams: {country_code: this.country_code, geo_level: geo_level }})
        .then(function () {
          this.get('session').reconfigureAtGeoLevel(geo_level);
        }.bind(this));
    }
  }
});
