import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    // signin: function() {
    //   this.get('authSession').open('arcgis-oauth-bearer')
    //     .then((authorization) => {
    //       Ember.debug('AUTH SUCCESS: ', authorization);
    //     })
    //     .catch((err)=>{
    //       Ember.debug('AUTH ERROR: ', err);
    //     });
    // },
    // signout: function() {
    //   this.get('authSession').close();
    // }
  }
});