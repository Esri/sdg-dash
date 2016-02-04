import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel (transition) {
    
    // if (transition.targetName.indexOf('sdg.status') === -1) {
    //   this.transitionTo('sdg-overview');
    // }
  },
  
  afterModel (params, transition) {

    // if (this.session.get('isAuthenticated')) {
    //   var targetName = transition.targetName;
    //   if (targetName === 'home' || targetName === 'index') {
        // this.transitionTo('sdg-overview');
    //   }
    // } else {
    //   this.transitionTo('home');
    // }
  },

  actions: {

    authenticateSession: function () {
      // this.session.authenticate();
    },

    invalidateSession: function() {
      // this.session.invalidate();
      // this.transitionTo('/home');
    }
  }
});
