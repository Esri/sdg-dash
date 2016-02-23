import Ember from 'ember';

export default Ember.Component.extend({

  arcgisBeta4Service: Ember.inject.service(),

  classNames: ['landing-map'],

  didInsertElement() {
    const webmap = this.get('webmap');
    const settings = this.get('settings');

    const svc = this.get('arcgisBeta4Service');
    // svc.createMap(webmap, settings, this.element);
    svc.createMapOld(
      { 
        basemap: 'dark-gray'
      }, 
      {
        container: this.element,
        environment: {
          stars: 'none'
        }
      }
    );

    svc.addGlobalLayer();
  },

  willDestroy() {
    const svc = this.get('arcgisBeta4Service');
    svc.destroyMap();
  }

});
