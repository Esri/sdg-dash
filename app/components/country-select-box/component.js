import Ember from 'ember';

export default Ember.Component.extend({
  
  didInsertElement() {
    let elId = '#country-selector';
    this.$(elId).selectpicker({
      style: 'btn-default country-sel-input',
      selectOnTab: true,
      size: 8,
      width: '300px'
    });

    this.$('.dropdown-menu.open').css('max-width', '300px');

    let qp = this.get('container').lookup('router:main').router.state.queryParams;
    let geo_value = 'Global Progress';
    if (qp && qp.geo_group && qp.geo_value){
      geo_value = qp.geo_value;

      this.$(elId).selectpicker('val', geo_value);
    }

    this.$(elId).change(function () {
      let selector = this.$(elId);
      let selected_item = this.$(':selected', selector);
      let selected_geo_group = selected_item.parent().attr('value');
      let selected_geo_value = selector.val();

      let svc = this.get('session');
      svc.set('selected_geo_group', selected_geo_group);
      svc.set('selected_geo_value', selected_geo_value);

      this.get('goToGeography')(selected_geo_group, selected_geo_value);

    }.bind(this));
  }

});
