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
  classNames: ['btn btn-nocursor'],
  
  didInsertElement() {
    this._reTheme();
  },

  sessionRouteChanged: Ember.observer('session.selected_sdg', function () {
    this._reTheme();
  }),

  _reTheme() {
    const dark_color = this.get('session').get('selected_sdg').get('colorHex');
    const light_color = colorUtils.shadeColor(dark_color, 0.75);
    console.log('light color', light_color, 'dark_color', dark_color);

    this.$('.btn').css('color', dark_color);
    this.$('.btn').css('border-color', dark_color);
    
    var elId = '#sdg-selector';
    var holderEl = null;
    this.$(elId).on('show.bs.select', function () {
      holderEl = this.$('.dropdown-menu .inner li.selected.active a').css('background-color', dark_color);  
    }.bind(this));
    this.$(elId).on('hide.bs.select', function () {
      holderEl.css('background-color', 'white');  
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
  }
});
