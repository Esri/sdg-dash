import Ember from 'ember';
import ajax from 'ic-ajax';
import ENV from 'sdg-dash/config/environment';

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
          Ember.$(elId).append(
            '<option value="' + goal.goal + '">SDG ' + goal.goal.toString() + ': ' + short_name +'</option>'
          );
        }.bind(this));

        // initialize the selectpicker plugin
        Ember.$(elId).selectpicker({
          style: 'btn-default',
          selectOnTab: true,
          size: 8,
          width: '220px'
        });

        // wire up change event
        Ember.$(elId).change(function (a) {
          var selected = $(elId).val();
          this.changeDisplayName();
          this.get('changeSdg')(selected);
        }.bind(this));

        var goal = this.get('container').lookup('router:main').router.state.params.sdg.goal_id;
        Ember.$(elId).selectpicker('val', goal);
      
        this.changeDisplayName();

      }.bind(this));
  },

  changeDisplayName() {
    var elId = '#sdg-selector';
    var el = Ember.$(elId)[0];
    var btn_text = el.options[el.selectedIndex].text.split(':')[0].trim();
    Ember.$(elId).siblings('.btn').text(btn_text);
  }
});