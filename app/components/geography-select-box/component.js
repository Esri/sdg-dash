import Ember from 'ember';

export default Ember.Component.extend({
  
  didInsertElement() {
    let elId = '#geography-selector';
    this.$(elId).selectpicker({
      style: 'btn-default country-sel-input',
      selectOnTab: true,
      size: 8,
      width: '300px'
    });

    this.$('.dropdown-menu.open').css('max-width', '300px');

    let qp = this.get('container').lookup('router:main').router.state.queryParams;
    let country_code = 'GLOBAL';
    let country_name = 'Global Progress';
    if (qp && qp.country_code){
      country_code = qp.country_code;
      this.$(elId).selectpicker('val', country_code);
      let el = this.$(elId)[0];
      country_name = el.options[el.selectedIndex].text;
    }

    this.get('session').set('selected_country_name', country_name);

    this.$(elId).change(function (a) {
      let selected = $(elId).val();
      let country_name = a.target.options[a.target.selectedIndex].text;
      
      let sesh = this.get('session');
      sesh.set('selected_country_code', selected);
      sesh.set('selected_country_name', country_name);

      this.get('goToCountry')(selected);
    }.bind(this));


    // TODO load only available geographies; those which have data; to populate the select box
    // let svc = this.get('session');
    // svc.loadAvailableGeographies()
    //   .then(this._geographiesLoaded.bind(this))
    //   .catch(this._geographiesLoadedError.bind(this));
  },

  // _geographiesLoaded() {

  // },

  // _geographiesLoadedError(error) {
  //   console.log('error loading available geographies', error);
  // }
    
  
});
