import Ember from 'ember';

export default Ember.Route.extend({

  model(params, transition) {
    let in_src = '';
    let src = '';
    if (transition.queryParams) {
      in_src = transition.queryParams.src;
      if (transition.queryParams.src === 'aehin') {
        src = 'https://esri.box.com/shared/static/2kebf7zs45766lg9i90l3n3k3ho6wdw3.mp4'
      }
    }
    return Ember.Object.create({
      src: src
    });
  }

});
