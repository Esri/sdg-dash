import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    loadSDG(goal) {
      this.sendAction('loadSDG', goal);
    }
  },

  didInsertElement() {
    
    this.initCollage();

    this.resizeTimer = null;
    Ember.$(window).bind('resize', function () {
      Ember.$('.collage img').css("opacity", 0);
      if (this.resizeTimer) {
        clearTimeout(this.resizeTimer);
      }
      this.resizeTimer = setTimeout(this.initCollage, 200);
    }.bind(this));
  },

  willDestroyElement() {
    console.log('destroy!');
  },

  initCollage() {
    console.log('collage-ing');
    Ember.$('.collage').removeWhitespace().collagePlus({
      'effect' : 'effect-2',
      'targetHeight' : 200,
      'allowPartialLastRow' : true
    });

    Ember.$('.img-sm').css('opacity', 1);
  }
});
