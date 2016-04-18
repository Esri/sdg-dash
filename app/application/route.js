import Ember from 'ember';
import LoadingSliderMixin from '../mixins/loading-slider';

export default Ember.Route.extend(LoadingSliderMixin, {
  
  i18n: Ember.inject.service(),
  
  beforeModel() {
    let svc = this.get('i18n');
    console.log(svc);
  },

  actions: {
    changeLocale(locale) {
      let svc = this.get('i18n');
      svc.set('locale', locale);

      let locale_label =  svc.t('application.languages.' + locale);
      this.get('session').set('locale_label', locale_label);
    }
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