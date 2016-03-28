import Ember from 'ember';
import ajax from 'ic-ajax';
import ENV from 'sdg-dash/config/environment';
import colorUtils from 'sdg-dash/utils/colors';

export default Ember.Component.extend({

  didInsertElement() {
    ajax({
      url: ENV.sdgApi + 'goals',
      dataType: 'json'
    })
      .then(function (response) {
        var elId = '#sdg-selector';
        response.data.forEach(function(goal) {
          var short_name = goal.short;
          this.$(elId).append(
            '<option value="' + goal.goal + '">SDG ' + goal.goal.toString() + ': ' + short_name +'</option>'
          );
        }.bind(this));

        // initialize the selectpicker plugin
        this.$(elId).selectpicker({
          style: 'btn-default',
          selectOnTab: true,
          size: 8,
          width: '220px'
        });

        // wire up change event
        this.$(elId).change(function (a) {
          var selected = $(elId).val();
          this._changeDisplayName();
          this.get('changeSdg')(selected);
        }.bind(this));

        var goal = this.get('container').lookup('router:main').router.state.params.sdg.goal_id;
        this.$(elId).selectpicker('val', goal);
      
        this._changeDisplayName();
        
        this._reTheme();

      }.bind(this));
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
  },

  _changeDisplayName() {
    const elId = '#sdg-selector';
    const el = this.$(elId)[0];
    const btn_text = el.options[el.selectedIndex].text.split(':')[0].trim();
    this.$(elId).siblings('.btn').text(btn_text);
  }
});