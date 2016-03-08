import Ember from 'ember';

export default Ember.Component.extend({
  target: null,

  actions: {
    setDashboardTarget(target) {
      this.$('#myModal').one('hidden.bs.modal', this.modalDidHide.bind(this));
      this.set('target', target);
      this.$('#myModal').modal('hide');
    },

    setToSdgIndex() {
      this.$('#myModal').one('hidden.bs.modal', this.modalDidHide.bind(this));
      this.set('target', {id: 'SDG Index'});
      this.$('#myModal').modal('hide');
    }
  },

  modalDidHide: function (e) {
    var sel = this.get('target');
    this.get('session').set('selected_target', sel.id);
    this.get('session').set('selected_target_description', sel.title);
    this.sendAction('changeTarget', sel);
  }
});
