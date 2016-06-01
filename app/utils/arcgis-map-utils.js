// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an 
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific 
// language governing permissions and limitations under the License.

import Ember from 'ember';

// from http://preventas.maps.arcgis.com/apps/3DViz/index.html?appid=ce5e3e632bb24f029098a07765b71b63
// 3D Scene with Esri JSAPI v4 - Auto Globa Spin
// start spin
export function _startSpin() {
  this._stopSpin();
  this.spinTimer = setInterval(lang.hitch(this, this._doSpin), 100);
}

// stop spin
export function _stopSpin() {
  if (this.spinTimer) {
    clearInterval(this.spinTimer);
    this.spinTimer = null;
  }
}

// do spin
export function _doSpin() {
  var pos = this.view.camera.position;
  var posGeo = webMercatorUtils.webMercatorToGeographic(pos);
  var posX = posGeo.x - 1;
  if (posX <= -180) {
    posX = 179;
  }
  var posZ = pos.z;
  if (posZ < 8000000) {
    posZ = 8000000;
  }
  this.view.animateTo({
    position: [posX, 0, posZ],
    tilt: 0,
    heading: 0
  });
}