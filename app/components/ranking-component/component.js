import Ember from 'ember';
import ajax from 'ic-ajax';
import QueryTask from 'esri/tasks/QueryTask';
import Query from 'esri/tasks/query';

export default Ember.Component.extend({
  classNames: ['ranking-view'],

  didInsertElement() {
    this._super(...arguments);

    const comp = this.get('component');
    const settings = comp.settings;
    this.set('settings', settings);

    this._fetchData(settings);
  },

  _fetchData(settings) {
    const task = new QueryTask(settings.url);

    let query = new Query();
    query.where = settings.query.where;
    query.outFields = settings.query.outFields;
    query.orderByFields = settings.query.orderByFields;

    task.execute(query, this._handleQueryResponse.bind(this), this._handleQueryError.bind(this));
  },

  _handleQueryResponse(response) {
    if (response.features.length > 0) {
      const features = response.features;
      const settings = this.get('settings');
      
      const highlight = settings.highlight_value;
      const highlight_field = settings.highlight_field;
      const highlight_padding = settings.highlight_padding;
      const value_field = settings.value_field;

     
      let row;
      let i = 1;
      let foundIndex = null;
      for (i;i < features.length;i++) {
        if (features[i].attributes[highlight_field] === highlight) {
          foundIndex = i;
        }
      }

      let rows = [];
      if (Ember.isNone(foundIndex)) {
        // do nothing
      } else if (foundIndex === 0) {
        // first
        rows.push({ ranking: 1, is_highlighted: true, label: features[0].attributes[highlight_field], value: features[0].attributes[value_field] });
        
        i=1;
        for (i;i <= highlight_padding;i++) {
          rows.push( { ranking: i, label: features[i].attributes[highlight_field], value: features[i].attributes[value_field] } );
        }

        // last
        rows.push({ ranking: features.length, label: features[features.length-1].attributes[highlight_field], value: features[features.length-1].attributes[value_field] });        

      } else if (foundIndex === features.length-1) {
        // last
        rows.push({ ranking: 1, label: features[0].attributes[highlight_field], value: features[0].attributes[value_field] });

        let start_index = foundIndex - highlight_padding;
        for (start_index; start_index < foundIndex; start_index++) {
          rows.push( { ranking: start_index, label: features[start_index].attributes[highlight_field], value: features[start_index].attributes[value_field] } );
        }

        rows.push({ ranking: foundIndex, is_highlighted: true, label: features[foundIndex].attributes[highlight_field], value: features[foundIndex].attributes[value_field] });
      } else {
        // somewhere in between
        rows.push({ ranking: 1, label: features[0].attributes[highlight_field], value: features[0].attributes[value_field] });

        let ahead_start = foundIndex - settings.highlight_padding;
        for (ahead_start; ahead_start < foundIndex; ahead_start++) {
          rows.push( {ranking: ahead_start, label: features[ahead_start].attributes[highlight_field], value: features[ahead_start].attributes[value_field] });
        }

        rows.push( {ranking: foundIndex, is_highlighted: true, label: features[foundIndex].attributes[highlight_field], value: features[foundIndex].attributes[value_field] });

        let behind_end = foundIndex + settings.highlight_padding;
        foundIndex += 1;
        for (foundIndex; foundIndex <= behind_end; foundIndex++) {
          rows.push( {ranking: foundIndex, label: features[foundIndex].attributes[highlight_field], value: features[foundIndex].attributes[value_field] });
        }

        rows.push({ ranking: features.length, label: features[features.length-1].attributes[highlight_field], value: features[features.length-1].attributes[value_field] });
      }

      // format number values
      rows.forEach(function (row) {
        if (row.value !== 0) {
          row.value = row.value.toFixed(1);
        }        
      });

      this.set('rows', rows);
    }
  },

  _handleQueryError(error) {
    console.log('error querying for ranking card component', error);
  }

});
