// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific 
// language governing permissions and limitations under the License.

import Ember from 'ember';
import ajax from 'ic-ajax';
import ENV from 'sdg-dash/config/environment';
import colorUtils from 'sdg-dash/utils/colors';
import Cookies from 'npm:js-cookie';

export default Ember.Component.extend({
  classNames: ['btn'],

  // i18n: Ember.inject.service(),
  
  fetchGoals(locale) {    
    return ajax({
      url: ENV.sdgApi + 'goals',
      data: {
        locale: locale
      },
      dataType: 'json'
    });
  },

  addDropDownItems(response) {
    response.data.forEach(function(goal) {
      const short_name = goal.short;
      this.$(this.get('elId')).append(
        '<option value="' + goal.goal + '">SDG ' + goal.goal.toString() + ': ' + short_name +'</option>'
      );
    }.bind(this));

    return Ember.RSVP.Promise.resolve();
  },

  didInsertElement() {
    this.set('elId', '#sdg-selector');

    let locale = Cookies.get('current_locale');
    if (!locale) {
      locale = this.get('i18n.locale');
    }

    this.fetchGoals(locale)
      
      .then(this.addDropDownItems.bind(this))

      .then(function () {

         // initialize the selectpicker plugin
        this.$(this.get('elId')).selectpicker({
          style: 'btn-default',
          liveSearch: false,
          selectOnTab: true
          ,size: 'auto'
          ,width: '175px'
        });

        // wire up change event
        this.$(this.get('elId')).change(function () {
          const selected = this.$(this.get('elId')).val();
          this._changeDisplayName();
          this.get('changeSdg')(selected);
        }.bind(this));

        const goal = this.get('container').lookup('router:main').router.state.params.sdg.goal_id;
        this.$(this.get('elId')).selectpicker('val', goal);
        this._changeDisplayName();
        
        this._reTheme();

      }.bind(this));
  },

  i18nChanged: Ember.observer('i18n.locale', function () {
    const locale = this.get('i18n.locale');
    console.log('locale is now', locale);

    this.$(this.get('elId')).empty();

    this.fetchGoals(locale)
      .then(this.addDropDownItems.bind(this))
      .then(function () {
        this.$(this.get('elId')).selectpicker('refresh');
      }.bind(this));
  }),

  sessionRouteChanged: Ember.observer('session.selected_sdg', function () {
    // const id = this.get('session').get('selected_sdg').get('id');
    // this.$(this.get('elId')).selectpicker('val', id);
    // this._changeDisplayName();

    // this.updateSDGi18nText(id);
    this._clearCustomClasses();
    this._reTheme();
  }),

  updateSDGi18nText(goal_number) {
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

  _clearCustomClasses() {
    this.$('.btn')
      .removeClass()
      .addClass('btn dropdown-toggle btn-default');
  },

  _reTheme() {
    const dark_color = this.get('session').get('selected_sdg').get('colorHex');
    const light_color = colorUtils.shadeColor(dark_color, 0.75);
    console.log('light color', light_color, 'dark_color', dark_color);

    this.$('.btn').css('color', dark_color);
    this.$('.btn').css('border-color', dark_color);
    
    const elId = '#sdg-selector';
    let holderEl = null;
    this.$(elId).on('show.bs.select', function () {
      holderEl = this.$('.dropdown-menu .inner li.selected a').css('background-color', dark_color).css('color', 'white');
    }.bind(this));
    this.$(elId).on('hide.bs.select', function () {
      holderEl.css('background-color', 'white').css('color', '#4C4C4C');
    }.bind(this));    

    const sdg_id = this.get('session').get('selected_sdg').get('id');
    const current_sdg_class = `btn-sdg-${sdg_id}`;
    this.set('current_sdg_class', current_sdg_class);
  },

  mouseEnter() {
    this.$('.btn')
      .removeClass('btn-default')
      .addClass(this.get('current_sdg_class'));
  },
  mouseLeave() {
    this.$('.btn')
      .removeClass(this.get('current_sdg_class'))
      .addClass('btn-default');
  },

  _changeDisplayName() {
    const elId = '#sdg-selector';
    const el = this.$(elId)[0];
    const btn_text = el.options[el.selectedIndex].text.split(':')[0].trim();
    this.$(elId).siblings('.btn').text(btn_text);
  }
});