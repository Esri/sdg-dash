import Ember from 'ember';

export default Ember.Component.extend({
  
  i18n: Ember.inject.service(),

  // currentLocale: Ember.computed('i18n', function () {
  //   return this.get('i18n').locale;
  // }),  
   
  currentLocale: 'en',
  
  currentLocaleObserver: Ember.observer('i18n.locale', function () {
    this.set('currentLocale', this.get('i18n').locale);
  }),  

  actions: {
    loadSDG(goal) {
      this.sendAction('loadSDG', goal);
    }
  },

  didInitAttrs() {
      // initialize service for locale binding in template
    this.get('i18n');
    console.log('init!');
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
      'targetHeight' : 150,
      'allowPartialLastRow' : true
    });

    Ember.$('.img-sm').css('opacity', 1);
  }
});
