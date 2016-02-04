import Ember from 'ember';

export default Ember.Controller.extend({

  countryName: '',
  stat1: '',
  stat2: '',

  actions: {

    updateCountryName: function (name, stat1, stat2)  {
      this.set('countryName', name);
      this.set('stat1', Math.round(stat1, 0).toString());
      this.set('stat2', Math.round(stat2, 0).toString());
    }
  }
});
