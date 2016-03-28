import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    signin: function() {
      console.log('doSignIn from controller');
    },
    doSignOut: function () {
      console.log('doSignOut from controller');
    }
  }
});
