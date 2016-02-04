import Ember from 'ember';

export default Ember.Component.extend({
  
  didInsertElement() {
    let elId = '#country-selector';
    Ember.$(elId).selectpicker({
      style: 'btn-default country-sel-input',
      selectOnTab: true,
      size: 8,
      width: '300px'
    });

    Ember.$('.dropdown-menu.open').css('max-width', '300px');

    let qp = this.get('container').lookup('router:main').router.state.queryParams;
    let country_code = 'GLOBAL';
    let country_name = 'Global Progress';
    if (qp && qp.country_code){
      country_code = qp.country_code;
      Ember.$(elId).selectpicker('val', country_code);
      let el = Ember.$(elId)[0];
      country_name = el.options[el.selectedIndex].text;
    }

    this.get('session').set('selected_country_name', country_name);

    Ember.$(elId).change(function (a) {
      let selected = $(elId).val();
      let country_name = a.target.options[a.target.selectedIndex].text;
      
      let sesh = this.get('session');
      sesh.set('selected_country_code', selected);
      sesh.set('selected_country_name', country_name);

      this.get('goToCountry')(selected);
    }.bind(this));
  }
});
