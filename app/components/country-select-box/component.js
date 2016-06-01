// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific 
// language governing permissions and limitations under the License.

import Ember from 'ember';
import colorUtils from 'sdg-dash/utils/colors';

export default Ember.Component.extend({

  classNames: ['btn', 'no-pad-left'],
  
  didInsertElement() {
    let elId = '#country-selector';
    this.$(elId).selectpicker({
      style: 'btn-default country-sel-input',
      selectOnTab: true,
      size: 8
      ,width: '185px'
    });

    this.$('.dropdown-menu.open').css('max-width', '300px');

    let qp = this.get('container').lookup('router:main').router.state.queryParams;
    let geo_value = 'Global Progress';
    if (qp && qp.geo_group && qp.geo_value){
      geo_value = qp.geo_value;

      this.$(elId).selectpicker('val', geo_value);
    }

    this.$(elId).change(function () {
      let selector = this.$(elId);
      let selected_item = this.$(':selected', selector);
      let selected_geo_group = selected_item.parent().attr('value');
      let selected_geo_value = selector.val();

      let svc = this.get('session');
      svc.set('selected_geo_group', selected_geo_group);
      svc.set('selected_geo_value', selected_geo_value);

      this.get('goToGeography')(selected_geo_group, selected_geo_value);

    }.bind(this));

    this._reTheme();
  },

  sessionRouteChanged: Ember.observer('session.selected_sdg', function () {
    this._clearCustomClasses();
    this._reTheme();
    this.$('#country-selector').selectpicker('val', 'GLOBAL');
  }),

  _clearCustomClasses() {
    this.$('.btn')
      .removeClass()
      .addClass('btn dropdown-toggle btn-default');
  },

  _reTheme() {
    const sdg_id = this.get('session').get('selected_sdg').get('id');
    const current_sdg_class = `btn-sdg-${sdg_id}`;
    this.set('current_sdg_class', current_sdg_class);

    const dark_color = this.get('session').get('selected_sdg').get('colorHex');
    const light_color = colorUtils.shadeColor(dark_color, 0.75);
    console.log('light color', light_color, 'dark_color', dark_color);

    this.$('.btn').css('color', dark_color);
    this.$('.btn').css('border-color', dark_color);

    const elId = '#country-selector';
    let holderEl = null;
    this.$(elId).on('show.bs.select', function () {
      holderEl = this.$('.dropdown-menu .inner li.selected.active a').css('background-color', dark_color).css('color', 'white');
    }.bind(this));
    this.$(elId).on('hide.bs.select', function () {
      holderEl.css('background-color', 'white').css('color', '#4C4C4C');
    }.bind(this));    
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

});
