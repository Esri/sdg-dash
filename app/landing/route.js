import Ember from 'ember';

export default Ember.Route.extend({

  countryName: "My Country",

  actions: {
    loadOverviewSDG () {
      console.log('sdg overview load');
      Ember.$('#stage').fadeOut().promise()
        .then(function() {
          Ember.$('.collage').removeWhitespace().collagePlus({
            'effect' : 'effect-2',
          });
        }.bind(this));

      // setTimeout(function() {
      //   Ember.$('#stage').fadeIn();
      // }.bind(this), 2000);
    },

    loadOverviewMap () {
      console.log('map overview load');
    }
  }

});
