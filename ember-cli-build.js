/* global require, module */
var Funnel = require('broccoli-funnel');
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var env = EmberApp.env() || 'development';
// var isProductionLikeBuild = ['production', 'staging'].indexOf(env) > -1;

module.exports = function(defaults) {
  
  console.log('BUILD: Env is ' + env);
  
  var app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      includePaths: [
        'node_modules/bootstrap-sass/assets/stylesheets',
        'node_modules/calcite-bootstrap/dist/sass'
      ]
    },

    amd :{
      loader: 'https://js.arcgis.com/3.16/',
      configPath: 'config/dojo-config.js',
      packages: [
        'esri','dojo','dojox','dijit',
        'put-selector','xstyle','dbind','dgrid'
      ]
    },

    fingerprint: {
      exclude: ['images']
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('./bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js');

  //although app.import can't pull from node_modules, Funnel can
  var bootstrap_fonts = new Funnel('./node_modules/bootstrap-sass/assets/fonts/bootstrap', {
    srcDir: '/',
    include: ['**.*'],
    destDir: '/assets/fonts'
  });

  /** jquery collage-Plus (https://ed-lea.github.io/jquery-collagePlus/) **/
  app.import('./vendor/jquery-collagePlus/jquery.collagePlus.min.js');
  app.import('./vendor/jquery-collagePlus/jquery.collageCaption.min.js');
  app.import('./vendor/jquery-collagePlus/jquery.removeWhitespace.min.js');
  app.import('./vendor/jquery-collagePlus/transitions.css');

  /** bootstrap-select **/
  app.import('./vendor/bootstrap-select/bootstrap-select.min.js');
  app.import('./vendor/bootstrap-select/bootstrap-select.min.css');

  // typeahead
  app.import('./bower_components/typeahead.js/dist/typeahead.jquery.min.js');
  app.import('./bower_components/typeahead.js/dist/bloodhound.min.js');
  
  return app.toTree([bootstrap_fonts]);
};
