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
  text: 'Connect using Facebook or Google+',
  // authSession: Ember.inject.service('authSession'),

  // click() {
  //   const authSession = this.get('authSession');
  //   if (!authSession.content || !authSession.content.isAuthenticated) {
  //     this.get('authSession').open('arcgis-oauth-bearer')
  //       .then((authorization) => {
  //         Ember.debug('AUTH SUCCESS: ', authorization);
  //         this.set('text', 'Logout');
  //       })
  //       .catch((err)=>{
  //         Ember.debug('AUTH ERROR: ', err);
  //       });
  //   } else {
  //     authSession.close();
  //     this.set('text', 'Login with Facebook or Google+');
  //   }    
  // }
});
