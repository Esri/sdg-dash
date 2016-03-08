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
          this.changeDisplayName();
          this.get('changeSdg')(selected);
        }.bind(this));

        var goal = this.get('container').lookup('router:main').router.state.params.sdg.goal_id;
        this.$(elId).selectpicker('val', goal);
      
        this.changeDisplayName();

      }.bind(this));
  },

  changeDisplayName() {
    var elId = '#sdg-selector';
    var el = this.$(elId)[0];
    var btn_text = el.options[el.selectedIndex].text.split(':')[0].trim();
    this.$(elId).siblings('.btn').text(btn_text);
  }
});