import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('landing');
  this.route('sdg-overview', {path: '/'});
  this.route('map-overview');
  this.route('sdg', { path: '/sdg-overview/:goal_id'}, function() {
    // this.route('status', { path: '/'},function () {});
  });
  this.route('video-player');
});

export default Router;
