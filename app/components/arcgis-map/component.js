import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['arcgis-map-component'],

  arcgisMapService: Ember.inject.service(),

  init() {
    this._super(...arguments);

    // array to store map event handlers
    this.handlers = [];
  },

  didInsertElement() {
    // parse properties
    let webmap = this.get('webmap');
    const options = this.get('options');

    const no_data = this.get('no_data') || null;
    if (no_data) {
      webmap = '01e686d4ca0947cb827ac3ecf4766b87';
    }

    // init map
    const svc = this.get('arcgisMapService');
    if (!webmap) {
      return;
    }

    svc.createMap(webmap, this.element, options).then((response) => {
      this.map = response.map;
      this.itemInfo = response.itemInfo;
      if (response.clickEventHandle) {
        this.handlers.push(response.clickEventHandle);
      }
    });
  },

  willDestroyElement() {
    const svc = this.get('arcgisMapService');
    svc.destroyMap(this.map, this.handlers);
    this.itemInfo = null;
  }
});