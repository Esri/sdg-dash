import Ember from 'ember';
import arcgisUtils from 'esri/arcgis/utils';

export default Ember.Component.extend({
  
  map: null,

  didInsertElement() {
    const webmapId = 'b663c29073f447c98b79c9b4455a4bb8';
    const options = {
      mapOptions: {
        slider : true,
        logo : false,
        showAttribution : false,
        smartNavigation : false
      }
    };

    console.log('rendering Global SDG Index Map ..');

    arcgisUtils.createMap(webmapId, this.element, options)
      .then( (response) => {
        let map = response.map;
        map.disableScrollWheelZoom();
        this.set('map', map);
      });
  },  

  willDestroyElement() {
    const map = this.get('map');
    if (map) {
      map.destroy();
    }
  }
});