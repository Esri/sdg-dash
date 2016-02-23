import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['country_code','geo_level', 'target_id'],
  country_code: null,
  geo_level: null,
  target_id: null,

  actions: {
    changeTarget(target) {
      this.model.set('selected_target', target);
      this.transitionToRoute({queryParams: {country_code: this.country_code, geo_level: this.geo_level, target_id: target.id }})
        .then(function () {
          this.get('session').loadDashboardCards(this.country_code, this.model.get('id'), target.id);
        }.bind(this));
    },

    changeSdg(selected) {
      console.log('changeSdg from controller::sdg', selected);
      this.transitionToRoute('sdg', selected, {queryParams: {country_code: this.country_code, target_id: null }});
    },

    goToCountry(country_code) {
      this.set('geo_level', null);
      let target_id = this.get('session').get('selected_target').id;
      this.transitionToRoute({queryParams: {country_code: country_code }})
        .then(function () {
          this.get('session').loadDashboardCards(country_code, this.model.get('id'), target_id);
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
