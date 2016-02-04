import Ember from 'ember';
// import ajax from 'ic-ajax';

export default Ember.Route.extend({
  actions: {
    routeToSDG(goal) {
      console.log(goal);
      this.transitionTo('sdg', goal.get('realNumber'));
    }
  },

  model() {
    return this.store.query('sdg', {});
  }

});