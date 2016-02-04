import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: {
    country_code: {
      refreshModel: true
    },
    geo_level: {
      refreshModel: true
    }
  },
  country_code: null,
  geo_level: null,

  actions: {
    changeSdg: function (selected) {
      console.log('changeSdg from controller::sdg', selected);
      this.transitionToRoute('sdg', selected, {queryParams: {country_code: this.country_code}});
    },

    goToCountry: function(country_code) {
      this.set('geo_level', null);
      this.transitionToRoute({queryParams: {country_code: country_code }})
        .then(function () {
          this.get('session').loadDashboardsAndReconfigure(country_code, this.model.get('id'));
        }.bind(this));
    },

    goToGeoLevel: function (geo_level) {
       this.transitionToRoute({queryParams: {country_code: this.country_code, geo_level: geo_level }})
        .then(function () {
          this.get('session').reconfigureAtGeoLevel(geo_level);
        }.bind(this));
    }
  }
});
