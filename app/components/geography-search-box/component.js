import Ember from 'ember';
import ajax from 'ic-ajax';
import ENV from 'sdg-dash/config/environment';
import colorUtils from 'sdg-dash/utils/colors';

export default Ember.Component.extend({
  tagName: 'input',
  classNames: ['form-control'],
  minLength: 2,
  value: 'Global',

  didInsertElement() {
    this._super(...arguments);
    this.initTypeahead();
  },

  initTypeahead() {
    ajax({
      url: ENV.sdgDashboardsApi + 'geographies',
      dataType: 'json'
    })
      .then((response) => {
        console.log(response);

        if (!response.data || response.data.length === 0) {
          Ember.debug('no data returned when looking for geographies for selector');
          return;
        }

        const qp = this.get('container').lookup('router:main').router.state.queryParams;
        let geo_value = 'Global Progress';
        if (qp && qp.geo_group && qp.geo_value){
          geo_value = qp.geo_value;
          const display_name = response.data.filter(function (item) {
            return item.id === geo_value;
          })[0].display;
          
          this.$().val(display_name);
        }

        let countries_data = [];
        let cities_data = [];
        response.data.forEach(function (geo) {
          if (geo.geo_group === 'countries') {
            countries_data.push(geo);
          } else if (geo.geo_group === 'cities') {
            cities_data.push(geo);
          }
        }, this);
        
        const countries = new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.obj.whitespace('display','id'),
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          local: countries_data
        });

        const cities = new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.obj.whitespace('display','id'),
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          local: cities_data
        });
        
        this.$().typeahead(
          {highlight: true},
          {
            name: 'countries',
            source: countries,
            display: 'display',
            templates: {
                header: '<p class="geo-header">Countries</p>'
              }
          },
          {
            name: 'cities',
            source: cities,
            display: 'display',
            templates: {
                header: '<p class="geo-header">Cities</p>'
            }
          }
        );

        this.$().bind('typeahead:selected', function(ev, suggestion) {
          console.log(suggestion);
        });
        this.$().bind('typeahead:select', function(ev, suggestion) {
          if (!suggestion ||
              !suggestion.geo_group ||
              !suggestion.id ) {
            return;
          }
          const selected_geo_group = suggestion.geo_group;
          const selected_geo_value = suggestion.id;
          let svc = this.get('session');
          svc.set('selected_geo_group', selected_geo_group);
          svc.set('selected_geo_value', selected_geo_value);

          this.get('goToGeography')(selected_geo_group, selected_geo_value);
        }.bind(this));

        this._reTheme();
      })
      .catch((error) => {
        console.log('error getting geographies for selector: ', error);
      });
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

    this.$().css('color', dark_color);
    this.$().css('border-color', dark_color);
  }
});
