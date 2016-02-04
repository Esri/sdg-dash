import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({

  urlForFindAll () {
    // return 'http://localhost:4200/config/sdg.json';
    return 'https://sdg-api.herokuapp.com/goals';
  }

  ,urlForFindRecord () {
    // return 'http://localhost:4200/config/sdg.json';
    return 'https://sdg-api.herokuapp.com/goals';
  }

  ,urlForQuery () {
    return 'https://sdg-api.herokuapp.com/goals';
  }

  ,urlForQueryRecord () {
    return 'https://sdg-api.herokuapp.com/goals';
  }
});
