import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['vert-center'],

  didInsertElement() {
    Ember.$('#sm-carousel').carousel({
      interval: 8000,
      pause: ''
    });

    let url = this.get('model.component.settings.url');
    Ember.$('#sm-carousel').on('click', function () { 
      window.open(url);
    });

    let class_names = this.get('model.component.class_names');
    if (class_names) {
      Ember.$(this.element).addClass(class_names);
    }
  }
});
