import Ember from 'ember';
import colorUtils from 'sdg-dash/utils/colors';

export default Ember.Component.extend({
  
  didInsertElement() {
    const elId = '#geo-levels-selector';
    this.$(elId).selectpicker({
      style: 'btn-default',
      selectOnTab: true,
      size: 8,
      noneSelectedText: 'No Data',
      width: '210px'
    });

    this.$(elId).on('change', function () {
      const sel = this.$(elId).val();
      
      const levels = this.get('session').get('available_dashboard_levels');
      const new_level = levels.filter(function (l) { return l.title === sel; })[0];
      this.get('session').set('selected_dashboard', new_level);

      this.sendAction('goToGeoLevel', sel);

    }.bind(this));

    this._reTheme();
  },

  didUpdate() {
    let elId = '#geo-levels-selector';
    let len = this.get('session').get('available_geo_levels').length;
    let disabled = (len <= 1) ? true : false;
    this.$(elId).prop('disabled', disabled);
    let val = this.get('session').get('selected_geo_level');
    this.$(elId).selectpicker('val', val);
    this.$(elId).selectpicker('refresh');
  },

  sessionRouteChanged: Ember.observer('session.selected_sdg', function () {
    this._clearCustomClasses();
    this._reTheme();
  }),

   _clearCustomClasses() {
    Ember.$('#' + this.elementId + ' .btn')
      .removeClass()
      .addClass('btn dropdown-toggle btn-default');
  },

  _reTheme() {
    const dark_color = this.get('session').get('selected_sdg').get('colorHex');
    const light_color = colorUtils.shadeColor(dark_color, 0.75);
    console.log('light color', light_color, 'dark_color', dark_color);

    Ember.$('#' + this.elementId + ' .btn').css('color', dark_color);
    Ember.$('#' + this.elementId + ' .btn').css('border-color', dark_color);
    
    var elId = '#geo-levels-selector';
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