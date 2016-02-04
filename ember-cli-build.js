/* global require, module */
var Funnel = require('broccoli-funnel');
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    sassOptions: {
      includePaths: [
        'node_modules/bootstrap-sass/assets/stylesheets',
        'node_modules/calcite-bootstrap/dist/sass',
        'node_modules/font-awesome/scss'
      ]
    },

    amd :{
      loader: 'https://js.arcgis.com/3.15/',
      configPath: 'config/dojo-config.js',
      packages: [
        'esri','dojo','dojox','dijit',
        'put-selector','xstyle','dbind','dgrid'
      ]
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

  app.import('./bower_components/bootstrap-sass/assets/javascripts/bootstrap.js');

  //although app.import can't pull from node_modules, Funnel can
  var bootstrap_fonts = new Funnel('./node_modules/bootstrap-sass/assets/fonts/bootstrap', {
    srcDir: '/',
    include: ['**.*'],
    destDir: '/assets/fonts'
  });

  // font-awesome fonts
  var fa_fonts = new Funnel('./node_modules/font-awesome/fonts', {
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

  /** gridster **/
  // app.import('./vendor/gridster/jquery.gridster.min.css');
  // app.import('./vendor/gridster/jquery.gridster.with-extras.min.js');

  // cedar
  // app.import(app.bowerDirectory + '/d3/d3.js');
  // app.import(app.bowerDirectory + '/vega/vega.js');
  // app.import(app.bowerDirectory + '/cedar/src/cedar.js');
  // app.import('./vendor/cedar-charts/bar-horizontal.json', {
  //   destDir: 'assets/charts'
  // });
  // app.import('./vendor/cedar-charts/bar.json', {
  //   destDir: 'assets/charts'
  // });
  // app.import('./vendor/cedar-charts/bubble.json', {
  //   destDir: 'assets/charts'
  // });
  // app.import('./vendor/cedar-charts/pie.json', {
  //   destDir: 'assets/charts'
  // });
  // app.import('./vendor/cedar-charts/scatter.json', {
  //   destDir: 'assets/charts'
  // });
  // app.import('./vendor/cedar-charts/sparkline.json', {
  //   destDir: 'assets/charts'
  // });
  // app.import('./vendor/cedar-charts/time.json', {
  //   destDir: 'assets/charts'
  // });
  
  return app.toTree([bootstrap_fonts, fa_fonts]);
};
