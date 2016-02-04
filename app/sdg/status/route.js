import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    goToCountry: function (selected) {
      console.log(selected);
      this.transitionTo({queryParams: {country_code: selected }});
    },

    moveToSdgRoute: function (sdg) {
      this.get('session').set('selected_sdg', sdg);
      
      var params = this.router.router.state.queryParams;
      if (params) {
        this.transitionTo('sdg', sdg, { 
          queryParams: { 
            country_code: params.country_code
          }
        });
      } else {
        this.transitionTo('sdg', sdg);
      }
    }
  }
});
