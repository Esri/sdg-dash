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

  countryName: "My Country",

  actions: {
    loadOverviewSDG () {
      console.log('sdg overview load');
      Ember.$('#stage').fadeOut().promise()
        .then(function() {
          Ember.$('.collage').removeWhitespace().collagePlus({
            'effect' : 'effect-2',
          });
        }.bind(this));

      // setTimeout(function() {
      //   Ember.$('#stage').fadeIn();
      // }.bind(this), 2000);
    },

    loadOverviewMap () {
      console.log('map overview load');
    }
  }

});
