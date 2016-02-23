import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    routeToSDG(goal) {
      console.log(goal);
      this.transitionTo('sdg', goal.get('realNumber'));
    }
  },

  beforeModel() {
    console.log('beforeModel');
  },

  model() {
    // return this.store.query('sdg', {});
    return this.store.query('sdg-overview', {});
  }
});