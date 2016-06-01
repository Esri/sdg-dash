// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific 
// language governing permissions and limitations under the License.

import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

  normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
    var data = payload.data.map(function (item) {
      return {
        id: item.goal,
        type: 'sdg',
        attributes: {
          title: item.short,
          displayNumber: (item.goal < 10 ? '0' + item.goal : item.goal.toString()),
          realNumber: item.goal,
          description: item.title,
          colorHex: item.colorInfo.hex,
          colorRgb: item.colorInfo.rgb.join(',')
        }
      }
    });
    return {
      "data": data,
      "meta": {}
    };
  },

  normalizeQueryRecordResponse(store, primaryModelClass, payload, id, requestType) {
    var goal = payload.data[0];
    // assign incrementing id to targets for UI display
    goal.targets.forEach(function(t, index) {
      t.autoId = index;
    });
    var data = {
      id: goal.goal,
      type: 'sdg',
      attributes: {
        displayNumber: (goal.goal < 10 ? '0' + goal.goal : goal.goal.toString()),
        realNumber: goal.goal,
        title: goal.short,
        description: goal.title,
        colorHex: goal.colorInfo.hex,
        colorRgb: goal.colorInfo.rgb,
        targets: goal.targets
      }
    };
    return {
      "data": data,
      "meta": {}
    };
  }
});