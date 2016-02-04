import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    changeSdg: function (sdg) {
      this.get('changeSdg')(sdg);
    },

    countrySelectionDidChange: function () {

    },

    geoLevelsSelectionDidChange: function () {

    },

    targetSelectionDidChange: function () {

    }
  }
});