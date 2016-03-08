import Ember from 'ember';

import arcgisUtils from 'esri/arcgis/utils';
import Extent from 'esri/geometry/Extent';
import on from 'dojo/on';

export default Ember.Component.extend({

  didInsertElement() {

    const webmapId = 'b663c29073f447c98b79c9b4455a4bb8';
    const options = {
      mapOptions: {
        slider : false,
        logo : false,
        showAttribution : false
      }
    };

    console.log('rendering Global SDG Index Map ..');

    arcgisUtils.createMap(webmapId, this.element, options)
      .then( (response) => {
        let map = response.map;
        on.once(map, 'click, mouse-down', function () {
          const handler = this.get('animHandler');
          clearInterval(handler);
        }.bind(this));

        this.set('map', map);

        let bookmarks = response.itemInfo.itemData.bookmarks;
        this.set('bookmarks', bookmarks);
        this.set('bookmark_counter', 0);

        this._startExtentAnimation(bookmarks);
      });

  },

  _startExtentAnimation(bookmarks) {
    const time_interval = 6000;
    const animHandler = setInterval(function () {
      let idx = this.get('bookmark_counter');
      const bk = this.get('bookmarks')[idx];
      const map = this.get('map');

      map.setExtent(new Extent(bk.extent), true)
        .then( () => {
          idx++;
          if (idx === this.get('bookmarks').length) {
            idx = 0;
          }
          this.set('bookmark_counter', idx);
        });

    }.bind(this), time_interval);
    this.set('animHandler', animHandler);
  },

  willDestroyElement() {
    const animHandler = this.get('animHandler');
    if (animHandler) {
      clearInterval(animHandler);
    }
  }

});
