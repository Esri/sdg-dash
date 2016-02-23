import DS from 'ember-data';
import ENV from 'sdg-dash/config/environment';

export default DS.JSONAPIAdapter.extend({
  urlForQuery() {
    return ENV.sdgApi + 'goals';
  }
});
