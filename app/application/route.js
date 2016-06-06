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
import Cookies from 'npm:js-cookie';

export default Ember.Route.extend(LoadingSliderMixin, {
  
  beforeModel(transition) {
    let svc = this.get('i18n');
    
    console.log('current locale: ', this.get('i18n.locale'));
    let current_locale = Cookies.get('current_locale');
    if (current_locale) {
      this.set('i18n.locale', current_locale);
      let locale_label =  svc.t('application.languages.' + current_locale);
      this.get('session').set('locale_label', locale_label);
    }
    
    console.log('current locale: ', this.get('i18n.locale'));    
  },

  updateSDGText(goal_number) {
    let svc = this.get('i18n');
    let goal_locale = svc.t(`application.goal_info.goal`);
    let title = svc.t(`application.goal_info.goals.${goal_number}.title`);
    let description = svc.t(`application.goal_info.goals.${goal_number}.description`);
    
    let ses = this.get('session');
    ses.setProperties({
      goalLocale: goal_locale,
      titleLocale: title,
      descriptionLocale: description
    });
  },

  actions: {
    changeLocale(locale) {
      let svc = this.get('i18n');
      svc.set('locale', locale);

      Cookies.set('current_locale', locale);

      let locale_label =  svc.t('application.languages.' + locale);
      this.get('session').set('locale_label', locale_label);

      this.updateSDGText(this.get('session').get('selected_sdg').get('id'));
    }
  }
});