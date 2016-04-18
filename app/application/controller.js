import Ember from 'ember';

export default Ember.Controller.extend({
  
  hexColorsArray: ['#fcb851', '#e64053', '#55bcb6', '#77edb2'],

  actions: {
    signin: function() {
      console.log('doSignIn from controller');
    },
    doSignOut: function () {
      console.log('doSignOut from controller');
    }
  }
});
