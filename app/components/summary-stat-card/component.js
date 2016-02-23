import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Component.extend({

  didInsertElement() {
    let settings = this.get('model.component.settings');
    if (!settings.query) {
      console.log('no query found for summary-stat-card; exiting ..');
      return;
    }
    this.set('settings', settings);

    // let class_names = this.get('model.component.class_names');
    // if (class_names) {
    //   Ember.$(this.element + ' .stat-value').addClass(class_names);
    // }

    this._fetchData();
  },

  _fetchData() {
    let settings = this.get('settings');
    let stats = settings.query.outStatistics;

    let data = {};
    data.f = 'json';

    data.outStatistics = JSON.stringify( stats );

    ajax({
      url: settings.url + '/query',
      data: data,
      dataType: 'json'
    })
      .then(this._handleQueryResponse.bind(this))
      .catch(this._handleQueryError.bind(this));
  },

  _formatAsNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  },

  _handleQueryResponse(response) {
    if (response.features.length > 0) {
      let settings = this.get('settings');
      let feature = response.features[0];
      let field_name = settings.query.outStatistics[0].outStatisticFieldName;
      let stat_value = feature.attributes[field_name];
      this.set('stat_value', this._formatAsNumber(parseInt(stat_value)));
      
      if (settings.stat_suffix) {
        this.set('stat_suffix', settings.stat_suffix);
      }
    }

  },

  _handleQueryError(error) {
    console.log('error querying for summary stat', error);
  }
});
