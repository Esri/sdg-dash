// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific 
// language governing permissions and limitations under the License.

import Ember from 'ember';

export default Ember.Route.extend({

  model(params, transition) {
    let in_src = '';
    let src = '';
    if (transition.queryParams) {
      in_src = transition.queryParams.src;
      if (transition.queryParams.src === 'aehin') {
        src = 'https://esri.box.com/shared/static/2kebf7zs45766lg9i90l3n3k3ho6wdw3.mp4'
      }
    }
    return Ember.Object.create({
      src: src
    });
  }

});
