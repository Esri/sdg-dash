/* jshint node: true */

module.exports = function(deployTarget) {
  console.info('DEPLOYJS: Environment: ' + deployTarget );
  console.info('process.env :: ', process.env);

  var ENV = {
    build: {
      environment: deployTarget
    },
    'revision-data': {
      type: 'git-commit'
    },
    's3-index': {
      accessKeyId: process.env.AWS_KEY,
      secretAccessKey: process.env.AWS_SECRET,
      bucket: "sdg-splash",
      region: "us-east-1",
      allowOverwrite: true
    },
    's3': {
      accessKeyId: process.env.AWS_KEY,
      secretAccessKey: process.env.AWS_SECRET,
      bucket: "sdg-splash",
      region: "us-east-1",
      filePattern: '**/*.{html,js,json,ico,css,png,gif,jpg,map,xml,txt,svg,eot,ttf,woff,woff2}'
    }
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'staging';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
