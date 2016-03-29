/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'sdg-dash',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    torii: {
      sessionServiceName: 'authSession',
      providers: {
        'arcgis-oauth-bearer': {
          apiKey: 'kNjojNLDhib1UoVH',
          showSocialLogins: true
        }
      }
    },

    contentSecurityPolicy: {
      'default-src': "'none' blob:",
      'script-src': "'self' http://arcgis-sdgs-385255865.us-east-1.elb.amazonaws.com/ 'unsafe-eval' 'unsafe-inline' http://*.arcgis.com/ https://*.arcgis.com/ https://apf-koop-sample-app.herokuapp.com https://*.esri.com",
      'font-src': "'self' data: *.fonts.net *.arcgis.com/",
      'connect-src': "'self' http://arcgis-sdgs-385255865.us-east-1.elb.amazonaws.com/ http://*.arcgis.com/ http://services.arcgisonline.com/ https://sdg-api.herokuapp.com/ http://localhost:3000 http://localhost:3100 https://*.esri.com",
      'img-src': "'self' blob: http://arcgis-sdgs-385255865.us-east-1.elb.amazonaws.com/ https://*.arcgis.com/ http://*.arcgis.com/ http://*.arcgisonline.com/ https://*.esri.com",
      'style-src': "'self' 'unsafe-inline' https://fast.fonts.net http://*.arcgis.com https://*.arcgis.com",
      'media-src': "'self'"
    },

    apiHost: 'http://www.arcgis.com',
    apiHostSecure: 'https://www.arcgis.com/',
    servicesHost: 'http://services.arcgis.com/',

    // The administration resource is the root node and initial entry point into the
    // administrative interface for the ArcGIS Online hosted services. This resource
    // represents a catalog of services published on the host.
    //
    // @see http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Resource_hierarchy/02r300000226000000/

    adminServiceCatalogRoot: 'arcgis/rest/admin/services/',
    apiOnlineRoot: 'sharing/rest/',
    apiContentRoot: 'content/',
    apiCommunityRoot: 'community/',
    apiUserContent: 'users/',
    apiUserItem: 'items/',
    portalsRoot: 'portals/',
    locatorUrl: 'https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer',

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    sdgApi: 'http://localhost:3000/',
    sdgDashboardsApi: 'http://localhost:3100/'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    // 
    ENV.sdgApi = 'http://localhost:3000/';
    ENV.sdgDashboardsApi = 'http://localhost:3100/';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }
  
  if (environment === 'staging') {
    ENV.baseURL = '/';
    ENV.sdgApi = 'https://sdg-api.herokuapp.com/';
    ENV.sdgDashboardsApi = 'https://sdg-dashboard-api.herokuapp.com/';
  }

  if (environment === 'production') {
    ENV.locationType = 'hash';
    ENV.baseURL = '/sdg-dash/';
    ENV.baseURL = '/';
    ENV.sdgApi = 'https://sdg-api.herokuapp.com/';
    ENV.sdgDashboardsApi = 'https://sdg-dashboard-api.herokuapp.com/';
  }

  return ENV;
};
