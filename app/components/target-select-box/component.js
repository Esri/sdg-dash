// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific 
// language governing permissions and limitations under the License.

import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    Ember.$('.target-selectpicker').selectpicker({
      style: 'btn-default',
      selectOnTab: true,
      size: 8
    });

    var selector = '#' + this.elementId + ' .btn-group.bootstrap-select';
    // Ember.$(selector).addClass('btn-block');
    Ember.$(selector).addClass('target-sel-override');
    // Ember.$(selector).css('width', '');
  }
});
