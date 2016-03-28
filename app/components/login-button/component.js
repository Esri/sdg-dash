import Ember from 'ember';

export default Ember.Component.extend({
  text: 'Connect using Facebook or Google+',
  // authSession: Ember.inject.service('authSession'),

  // click() {
  //   const authSession = this.get('authSession');
  //   if (!authSession.content || !authSession.content.isAuthenticated) {
  //     this.get('authSession').open('arcgis-oauth-bearer')
  //       .then((authorization) => {
  //         Ember.debug('AUTH SUCCESS: ', authorization);
  //         this.set('text', 'Logout');
  //       })
  //       .catch((err)=>{
  //         Ember.debug('AUTH ERROR: ', err);
  //       });
  //   } else {
  //     authSession.close();
  //     this.set('text', 'Login with Facebook or Google+');
  //   }    
  // }
});
