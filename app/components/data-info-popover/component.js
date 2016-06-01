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
    const data_info = this.get('model');
    
    let info = `<div><p class="text-muted"><u>Source</u></p><p class="text-primary">`;

    if (data_info.source_url) {
      info += `<a href="${data_info.source_url}" target="_blank">${data_info.source}</a><span class="glyphicon glyphicon-share-alt"></span></p></div><div><p class="text-muted"><u>Provider</u></p><p class="text-primary">${data_info.provider}</p></div>`;
    } else {
      info += `${data_info.source}</p></div><div><p class="text-muted"><u>Provider</u></p><p class="text-primary">${data_info.provider}</p></div>`;
    }

    if (data_info.method_url) {
      info += `<div><p class="text-muted"><u>Definition</u></p>
              <span class="text-primary"><a href="${data_info.method_url}" target="_blank">${data_info.method_name}</a></span>
              <span class="glyphicon glyphicon-share-alt"></span></div>`;
    }

    this.$(`#popover-${this.elementId}`).popover({ content: info });
  }
});