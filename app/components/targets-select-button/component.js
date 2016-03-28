import Ember from 'ember';
import colorUtils from 'sdg-dash/utils/colors';

export default Ember.Component.extend({
  didInsertElement() {
    this._reTheme();
  },

  sessionRouteChanged: Ember.observer('session.selected_sdg', function () {
    this._reTheme();
  }),

  _reTheme() {
    const dark_color = this.get('session').get('selected_sdg').get('colorHex');
    const light_color = colorUtils.shadeColor(dark_color, 0.75);
    console.log('light color', light_color, 'dark_color', dark_color);

    Ember.$('#' + this.elementId + ' .btn').css('color', dark_color);
    Ember.$('#' + this.elementId + ' .btn').css('border-color', dark_color);
    
    var elId = '#sdg-selector';
    var holderEl = null;
    this.$(elId).on('show.bs.select', function () {
      holderEl = this.$('.dropdown-menu .inner li.selected.active a').css('background-color', dark_color);  
    }.bind(this));
    this.$(elId).on('hide.bs.select', function () {
      holderEl.css('background-color', 'white');  
    }.bind(this));    

    const sdg_id = this.get('session').get('selected_sdg').get('id');
    const current_sdg_class = `btn-sdg-${sdg_id}`;
    this.set('current_sdg_class', current_sdg_class);
  },

  mouseEnter() {
    Ember.$('#' + this.elementId + ' .btn')
      .removeClass('btn-default')
      .addClass(this.get('current_sdg_class'));
  },
  mouseLeave() {
    Ember.$('#' + this.elementId + ' .btn')
      .removeClass(this.get('current_sdg_class'))
      .addClass('btn-default');
  }
});
