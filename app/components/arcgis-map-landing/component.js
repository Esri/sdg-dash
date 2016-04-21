import Ember from 'ember';
import arcgisUtils from 'esri/arcgis/utils';

export default Ember.Component.extend({
  
  map: null,

  didInsertElement() {
    const webmapId = '7aae45578d3143ffa92c2d89a1804f89';
    const options = {
      mapOptions: {
        slider : true,
        logo : false,
        showAttribution : false,
        smartNavigation : false
      }
    };

    console.log('rendering Global SDG Index Map ..');

    esri.config.defaults.io.corsEnabledServers.push('http://arcgis-sdgs-385255865.us-east-1.elb.amazonaws.com/');
    arcgisUtils.createMap(webmapId, this.element, options)
      .then( (response) => {
        let map = response.map;
        // map.disableScrollWheelZoom();
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