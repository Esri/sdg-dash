import Ember from 'ember';

export default Ember.Component.extend({
  target: null,

  actions: {
    setDashboardTarget(target) {
      Ember.$('#myModal').one('hidden.bs.modal', this.modalDidHide.bind(this));
      this.set('target', target);
      Ember.$('#myModal').modal('hide');
    }
  },

  modalDidHide: function (e) {
    var sel = this.get('target');
    this.get('session').set('selected_target', sel.id);
    this.get('session').set('selected_target_description', sel.title);
    this.sendAction('changeTarget', sel);
  }
});
