import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    Ember.$('.target-selectpicker').selectpicker({
      style: 'btn-default',
      selectOnTab: true,
      size: 8
    });

    var selector = '#' + this.elementId + ' .btn-group.bootstrap-select';
    // Ember.$(selector).addClass('btn-block');
    Ember.$(selector).addClass('target-sel-override');
    // Ember.$(selector).css('width', '');
  }
});
