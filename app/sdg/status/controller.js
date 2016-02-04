import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: {
    country_code: {
      refreshModel: true
    }
  },
  country_code: null
});
