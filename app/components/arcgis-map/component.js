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
    const webmap = this.get('webmap');
    const options = this.get('options');

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