# sdg-dash

A prototype web application for exploring data and services related to the SDGs.

This dashboard-style application is built using EmberCLI. More instructions on setup & Ember are below.

[View it Live](http://esri.github.io/sdg-dash/)

## APIs setup

![SDG APIs Overview](https://s3.amazonaws.com/sdg-dash-misc/sdg-apis-overview.jpg)

This application is driven by two APIs. The first contains all metadata related to the SDGs and can be found here: [The SDG API](https://github.com/Esri/sdg-api). The second is an example API that gives the application JSON-structured data on how to lay out a set of "cards" in a dashboard for a specific geography and is found here: [Sample SDG Dashboards API](https://github.com/apfister/sdg-dashboard-api/). This Sample Dashboards API will eventually be deprecated in favor of a future, more stable framework built on [ArcGIS Open Data](http://opendata.arcgis.com/about).

Once you have these APIs setup and running, in `config/environment.js` change the values any instance of `sdgApi` and `sdgDashboardsApi` to where you have hosted the respective APIs.

Example: 
```javascript
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

    sdgApi: 'http://localhost:3000/',
    sdgDashboardsApi: 'http://localhost:3100/'

  };
```

## Prerequisites to setup & run locally

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


## Licensing
Copyright 2016 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

A copy of the license is available in the repository's [LICENSE](/LICENSE) file.

[](Esri Tags: ArcGIS Web Mapping SDG Dashboard Ember OpenData)
[](Esri Language: JavaScript)