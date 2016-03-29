import Ember from 'ember';
import QueryTask from 'esri/tasks/QueryTask';
import Query from 'esri/tasks/query';

export default Ember.Component.extend({
  classNames: ['ranking-view'],

  queryHandle: null,

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

    const qH = task.execute(query, this._handleQueryResponse.bind(this), this._handleQueryError.bind(this));
    this.set('queryHandle', qH);
  },

  _handleQueryResponse(response) {
    if (response.features.length > 0) {
      const features = response.features;
      const settings = this.get('settings');
      
      const highlight = settings.highlight_value;
      const highlight_field = settings.highlight_field;
      const highlight_padding = settings.highlight_padding;
      const value_field = settings.value_field;

      // let row;
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

      // get normalized bar values
      const values = rows.map(function (row) {
        return row.value;
      });

      const normalized_values = this._normalizeBarValues(Ember.copy(values));
      const color_hex = this.get('session').get('selected_sdg').get('colorHex');
      rows.forEach(function (row, i) {
        const in_string = `width:${normalized_values[i]}%;background-color:${color_hex};`;
        const safeString = new Ember.Handlebars.SafeString(in_string);
        row.barRankStyle = safeString;
      }, this);

      this.set('rows', rows);
    }
  },

  // from : http://stackoverflow.com/questions/13368046/how-to-normalize-a-list-of-positive-numbers-in-javascript
  // http://jsfiddle.net/XpRR8/4/
  _normalizeBarValues(numbers) {
    let ratio = 0,
        i = numbers.length;

    while ( i-- ) { numbers[i] > ratio && ( ratio = numbers[i] ); }

    ratio /= 100;
    i = numbers.length;

    while (i--) { numbers[i] =  numbers[i] / ratio; }
    return numbers;
  },

  _handleQueryError(error) {
    console.log('error querying for ranking card component', error);
  },

  willDestroyElement() {
    const qH = this.get('queryHandle');
    if (qH) {
      qH.cancel();
    }
  }
});
