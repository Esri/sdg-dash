// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific 
// language governing permissions and limitations under the License.

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