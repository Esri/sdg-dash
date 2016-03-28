import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this.$('#sm-carousel').carousel({
      interval: 8000,
      pause: ''
    });

    let url = this.get('model.component.settings.url');
    this.$('#sm-carousel').on('click', function () { 
      window.open(url);
    });

    let class_names = this.get('model.component.class_names');
    if (class_names) {
      this.$(this.element).addClass(class_names);
    }
  }
});
