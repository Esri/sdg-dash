"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

efineday('sdg-dash/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'sdg-dash/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _sdgDashConfigEnvironment) {

  var App;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _sdgDashConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _sdgDashConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _sdgDashConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday('sdg-dash/application/adapter', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].RESTAdapter.extend({});
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday('sdg-dash/application/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    hexColorsArray: ['#fcb851', '#e64053', '#55bcb6', '#77edb2'],

    actions: {
      signin: function signin() {
        console.log('doSignIn from controller');
      },
      doSignOut: function doSignOut() {
        console.log('doSignOut from controller');
      }
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday('sdg-dash/application/route', ['exports', 'ember', 'sdg-dash/mixins/loading-slider', 'npm:js-cookie'], function (exports, _ember, _sdgDashMixinsLoadingSlider, _npmJsCookie) {
  exports['default'] = _ember['default'].Route.extend(_sdgDashMixinsLoadingSlider['default'], {

    beforeModel: function beforeModel(transition) {
      var svc = this.get('i18n');

      console.log('current locale: ', this.get('i18n.locale'));
      var current_locale = _npmJsCookie['default'].get('current_locale');
      if (current_locale) {
        this.set('i18n.locale', current_locale);
        var locale_label = svc.t('application.languages.' + current_locale);
        this.get('session').set('locale_label', locale_label);
      }

      console.log('current locale: ', this.get('i18n.locale'));
    },

    updateSDGText: function updateSDGText(goal_number) {
      var svc = this.get('i18n');
      var goal_locale = svc.t('application.goal_info.goal');
      var title = svc.t('application.goal_info.goals.' + goal_number + '.title');
      var description = svc.t('application.goal_info.goals.' + goal_number + '.description');

      var ses = this.get('session');
      ses.setProperties({
        goalLocale: goal_locale,
        titleLocale: title,
        descriptionLocale: description
      });
    },

    actions: {
      changeLocale: function changeLocale(locale) {
        var svc = this.get('i18n');
        svc.set('locale', locale);

        _npmJsCookie['default'].set('current_locale', locale);

        var locale_label = svc.t('application.languages.' + locale);
        this.get('session').set('locale_label', locale_label);

        this.updateSDGText(this.get('session').get('selected_sdg').get('id'));
      }
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 28
          }
        },
        "moduleName": "sdg-dash/application/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid master no-padding");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "targets-modal-destination");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "contribute-modal-destination");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" <div id=\"about-modal-destination\"></div> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" {{#ember-wormhole to=\"about-modal-destination\"}} -->\n<!--   {{about-modal}} -->\n<!-- {{/ember-wormhole}} ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]), 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "partial", ["-header"], [], ["loc", [null, [1, 0], [1, 23]]]], ["inline", "loading-slider", [], ["isLoading", ["subexpr", "@mut", [["get", "loading", ["loc", [null, [3, 27], [3, 34]]]]], [], []], "expanding", true, "color", ["subexpr", "@mut", [["get", "hexColorsArray", ["loc", [null, [3, 56], [3, 70]]]]], [], []]], ["loc", [null, [3, 0], [3, 72]]]], ["inline", "liquid-outlet", [], ["class", "bg-gray"], ["loc", [null, [6, 2], [6, 35]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('sdg-dash/arcgis-map-sdg-index-service/service', ['exports', 'ember', 'sdg-dash/utils/colors', 'esri/arcgis/utils', 'esri/tasks/ClassBreaksDefinition', 'esri/tasks/AlgorithmicColorRamp', 'esri/tasks/GenerateRendererParameters', 'esri/tasks/GenerateRendererTask', 'esri/layers/LayerDrawingOptions', 'esri/symbols/SimpleFillSymbol', 'esri/Color'], function (exports, _ember, _sdgDashUtilsColors, _esriArcgisUtils, _esriTasksClassBreaksDefinition, _esriTasksAlgorithmicColorRamp, _esriTasksGenerateRendererParameters, _esriTasksGenerateRendererTask, _esriLayersLayerDrawingOptions, _esriSymbolsSimpleFillSymbol, _esriColor) {
  exports['default'] = _ember['default'].Service.extend({
    createMap: function createMap(webMap, elem, options) {
      if (!options) {
        options = {
          mapOptions: {}
        };
      }
      options.mapOptions.smartNavigation = false;
      return _esriArcgisUtils['default'].createMap(webMap, elem, options);
    },

    destroyMap: function destroyMap(map, handlers) {
      if (_ember['default'].isArray(handlers)) {
        handlers.forEach(function (handler) {
          if (handler.remove) {
            handler.remove();
          }
        });
        handlers.length = 0;
        handlers = null;
      }

      if (map && map.destroy) {
        map.destroy();
        map = null;
      }
      return map;
    },

    renderSdgLayer: function renderSdgLayer(goal, hex_color_to, layer, layer_url) {
      console.log('rendering SDG index layer', goal);

      var hex_color_from = _sdgDashUtilsColors['default'].shadeColor(hex_color_to, 0.75);
      console.log(hex_color_to, hex_color_from);

      var params = this.getClassBreaksParams(goal, hex_color_from, hex_color_to);

      var generateRenderer = new _esriTasksGenerateRendererTask['default'](layer_url);
      generateRenderer.execute(params).then(function (renderer) {
        console.log(renderer);
        var optsArray = [];
        var drawingOptions = new _esriLayersLayerDrawingOptions['default']();
        drawingOptions.renderer = renderer;
        optsArray[23] = drawingOptions;

        layer.setLayerDrawingOptions(optsArray);
        layer.setVisibleLayers([23]);
        layer.show();
      }, function (error) {
        console.log('error generating renderer for sdg index map', error);
      });
    },

    getClassBreaksParams: function getClassBreaksParams(goal, cfrom, cto) {
      var classDef = new _esriTasksClassBreaksDefinition['default']();
      classDef.classificationField = 'SDG' + goal;
      classDef.classificationMethod = 'natural-breaks'; // always natural breaks
      classDef.breakCount = 5; // always five classes

      var colorRamp = new _esriTasksAlgorithmicColorRamp['default']();
      colorRamp.fromColor = new _esriColor['default'].fromHex(cfrom);
      colorRamp.toColor = new _esriColor['default'].fromHex(cto);
      colorRamp.algorithm = "hsv"; // options are:  "cie-lab", "hsv", "lab-lch"

      classDef.baseSymbol = new _esriSymbolsSimpleFillSymbol['default']('solid', null, null);
      classDef.colorRamp = colorRamp;

      var params = new _esriTasksGenerateRendererParameters['default']();
      params.classificationDefinition = classDef;

      return params;
    }

  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday('sdg-dash/arcgis-map-service/service', ['exports', 'ember', 'esri/arcgis/utils', 'esri/basemaps'], function (exports, _ember, _esriArcgisUtils, _esriBasemaps) {
  exports['default'] = _ember['default'].Service.extend({
    createMap: function createMap(webMap, elem, options) {
      if (!options) {
        options = {
          mapOptions: {}
        };
      }
      options.mapOptions.smartNavigation = false;
      return _esriArcgisUtils['default'].createMap(webMap, elem, options);
    },

    destroyMap: function destroyMap(map, handlers) {
      if (_ember['default'].isArray(handlers)) {
        handlers.forEach(function (handler) {
          if (handler.remove) {
            handler.remove();
          }
        });
        handlers.length = 0;
        handlers = null;
      }

      if (map && map.destroy) {
        map.destroy();
        map = null;
      }
      return map;
    },

    getBasemapDefinition: function getBasemapDefinition(basemap) {
      return _esriBasemaps['default'][basemap];
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday('sdg-dash/components/about-modal/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/about-modal/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 6
          }
        },
        "moduleName": "sdg-dash/components/about-modal/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "modal fade");
        dom.setAttribute(el1, "id", "aboutModal");
        dom.setAttribute(el1, "tabindex", "-1");
        dom.setAttribute(el1, "role", "dialog");
        dom.setAttribute(el1, "aria-labelledby", "myModalLabel");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "modal-dialog modal-lg");
        dom.setAttribute(el2, "role", "document");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "modal-content");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "close");
        dom.setAttribute(el5, "data-dismiss", "modal");
        dom.setAttribute(el5, "aria-label", "Close");
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "aria-hidden", "true");
        var el7 = dom.createTextNode("×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h4");
        dom.setAttribute(el5, "class", "modal-title");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-body modal-body-container");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createElement("strong");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-footer");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "btn btn-default");
        dom.setAttribute(el5, "data-dismiss", "modal");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element1, [3]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 3]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [1]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [0]), 0, 0);
        morphs[3] = dom.createMorphAt(element2, 2, 2);
        morphs[4] = dom.createMorphAt(dom.childAt(element0, [5, 1]), 0, 0);
        return morphs;
      },
      statements: [["inline", "t", ["application.about.title"], [], ["loc", [null, [6, 32], [6, 63]]]], ["inline", "t", ["application.about.text"], [], ["loc", [null, [9, 11], [9, 41]]]], ["inline", "t", ["application.about.data_disclaimer"], [], ["loc", [null, [10, 19], [10, 60]]]], ["inline", "t", ["application.about.data_disclaimer_text"], [], ["loc", [null, [10, 70], [10, 116]]]], ["inline", "t", ["application.about.btn_close"], [], ["loc", [null, [13, 75], [13, 110]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('sdg-dash/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'sdg-dash/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _sdgDashConfigEnvironment) {

  var name = _sdgDashConfigEnvironment['default'].APP.name;
  var version = _sdgDashConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
efineday('sdg-dash/components/arcgis-map/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    classNames: ['arcgis-map-component'],

    arcgisMapService: _ember['default'].inject.service(),

    init: function init() {
      this._super.apply(this, arguments);

      // array to store map event handlers
      this.handlers = [];
    },

    didInsertElement: function didInsertElement() {
      var _this = this;

      // parse properties
      var webmap = this.get('webmap');
      var options = this.get('options');

      var no_data = this.get('no_data') || null;
      if (no_data) {
        webmap = '01e686d4ca0947cb827ac3ecf4766b87';
      }

      // init map
      var svc = this.get('arcgisMapService');
      if (!webmap) {
        return;
      }

      svc.createMap(webmap, this.element, options).then(function (response) {
        _this.map = response.map;
        _this.map.disableScrollWheelZoom();

        // add servers to cors config
        // esri.config.defaults.io.corsEnabledServers
        response.itemInfo.itemData.operationalLayers.forEach(function (layer) {
          esri.config.defaults.io.corsEnabledServers.push(layer.url);
        });

        _this.itemInfo = response.itemInfo;
        if (response.clickEventHandle) {
          _this.handlers.push(response.clickEventHandle);
        }
      });
    },

    willDestroyElement: function willDestroyElement() {
      var svc = this.get('arcgisMapService');
      svc.destroyMap(this.map, this.handlers);
      this.itemInfo = null;
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/arcgis-map/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "sdg-dash/components/arcgis-map/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('sdg-dash/components/arcgis-map-landing/component', ['exports', 'ember', 'esri/arcgis/utils'], function (exports, _ember, _esriArcgisUtils) {
  exports['default'] = _ember['default'].Component.extend({

    map: null,

    didInsertElement: function didInsertElement() {
      var _this = this;

      var webmapId = '7aae45578d3143ffa92c2d89a1804f89';
      var options = {
        mapOptions: {
          slider: true,
          logo: false,
          showAttribution: false,
          smartNavigation: false
        }
      };

      console.log('rendering Global SDG Index Map ..');

      esri.config.defaults.io.corsEnabledServers.push('http://arcgis-sdgs-385255865.us-east-1.elb.amazonaws.com/');
      _esriArcgisUtils['default'].createMap(webmapId, this.element, options).then(function (response) {
        var map = response.map;
        map.disableScrollWheelZoom();
        _this.set('map', map);
      });
    },

    willDestroyElement: function willDestroyElement() {
      var map = this.get('map');
      if (map) {
        map.destroy();
      }
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/arcgis-map-landing/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "sdg-dash/components/arcgis-map-landing/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('sdg-dash/components/arcgis-map-sdg-index/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    classNames: ['arcgis-map-component'],

    arcgisMapSdgIndexService: _ember['default'].inject.service(),

    init: function init() {
      this._super.apply(this, arguments);

      // array to store map event handlers
      this.handlers = [];
    },

    didInsertElement: function didInsertElement() {
      var _this = this;

      // parse properties
      var webmap = this.get('webmap');
      var c = this.get('component');
      var settings = c.settings;

      // init map
      var svc = this.get('arcgisMapSdgIndexService');
      if (!webmap) {
        return;
      }
      svc.createMap(webmap, this.element, settings.options).then(function (response) {
        _this.map = response.map;
        _this.map.disableScrollWheelZoom();

        _this.itemInfo = response.itemInfo;
        if (response.clickEventHandle) {
          _this.handlers.push(response.clickEventHandle);
        }

        var goal = _this.get('container').lookup('router:main').router.state.params.sdg.goal_id;
        var hex_color = _this.get('session').get('selected_sdg').get('colorHex');
        var layer_loc = settings.sdgIndexLayerLocation;
        var layer = _this.itemInfo.itemData.operationalLayers[layer_loc[0]].layerObject;
        var layer_url = layer.url + '/' + layer_loc[1];

        svc.renderSdgLayer(goal, hex_color, layer, layer_url);
      });
    },

    willDestroyElement: function willDestroyElement() {
      var svc = this.get('arcgisMapSdgIndexService');
      svc.destroyMap(this.map, this.handlers);
      this.itemInfo = null;
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/arcgis-map-sdg-index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "sdg-dash/components/arcgis-map-sdg-index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('sdg-dash/components/cedar-chart/component', ['exports', 'ember-cli-cedar/components/cedar-chart/component'], function (exports, _emberCliCedarComponentsCedarChartComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliCedarComponentsCedarChartComponent['default'];
    }
  });
});
efineday('sdg-dash/components/chart-card/component', ['exports', 'ember-cli-opendata-pages/components/chart-card/component'], function (exports, _emberCliOpendataPagesComponentsChartCardComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsChartCardComponent['default'];
    }
  });
});
efineday('sdg-dash/components/contribute-button/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    btn_size: 'btn-lg'
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/contribute-button/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 9
          }
        },
        "moduleName": "sdg-dash/components/contribute-button/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "data-toggle", "modal");
        dom.setAttribute(el1, "data-target", "#contributeModal");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("span");
        dom.setAttribute(el2, "class", "glyphicon glyphicon-question-sign");
        dom.setAttribute(el2, "aria-hidden", "true");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" How can I Contribute?\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(1);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["btn ", ["get", "btn_size", ["loc", [null, [1, 21], [1, 29]]]], " btn-default"]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('sdg-dash/components/contribute-modal/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/contribute-modal/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 6
          }
        },
        "moduleName": "sdg-dash/components/contribute-modal/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "modal fade");
        dom.setAttribute(el1, "id", "contributeModal");
        dom.setAttribute(el1, "tabindex", "-1");
        dom.setAttribute(el1, "role", "dialog");
        dom.setAttribute(el1, "aria-labelledby", "myModalLabel");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "modal-dialog modal-lg");
        dom.setAttribute(el2, "role", "document");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "modal-content");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "close");
        dom.setAttribute(el5, "data-dismiss", "modal");
        dom.setAttribute(el5, "aria-label", "Close");
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "aria-hidden", "true");
        var el7 = dom.createTextNode("×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h4");
        dom.setAttribute(el5, "class", "modal-title");
        var el6 = dom.createTextNode("Connect & Share");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-body modal-body-container");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h4");
        var el6 = dom.createTextNode("Login");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createTextNode("connect with Facebook");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createTextNode("connect with Google");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createTextNode("connect with ArcGIS Online");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-footer");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "btn btn-default");
        dom.setAttribute(el5, "data-dismiss", "modal");
        var el6 = dom.createTextNode("Close");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" <button type=\"button\" class=\"btn btn-primary\">Save changes</button> ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
efineday('sdg-dash/components/country-select-box/component', ['exports', 'ember', 'sdg-dash/utils/colors'], function (exports, _ember, _sdgDashUtilsColors) {
  exports['default'] = _ember['default'].Component.extend({

    classNames: ['btn', 'no-pad-left'],

    didInsertElement: function didInsertElement() {
      var elId = '#country-selector';
      this.$(elId).selectpicker({
        style: 'btn-default country-sel-input',
        selectOnTab: true,
        size: 8,
        width: '185px'
      });

      this.$('.dropdown-menu.open').css('max-width', '300px');

      var qp = this.get('container').lookup('router:main').router.state.queryParams;
      var geo_value = 'Global Progress';
      if (qp && qp.geo_group && qp.geo_value) {
        geo_value = qp.geo_value;

        this.$(elId).selectpicker('val', geo_value);
      }

      this.$(elId).change((function () {
        var selector = this.$(elId);
        var selected_item = this.$(':selected', selector);
        var selected_geo_group = selected_item.parent().attr('value');
        var selected_geo_value = selector.val();

        var svc = this.get('session');
        svc.set('selected_geo_group', selected_geo_group);
        svc.set('selected_geo_value', selected_geo_value);

        this.get('goToGeography')(selected_geo_group, selected_geo_value);
      }).bind(this));

      this._reTheme();
    },

    sessionRouteChanged: _ember['default'].observer('session.selected_sdg', function () {
      this._clearCustomClasses();
      this._reTheme();
      this.$('#country-selector').selectpicker('val', 'GLOBAL');
    }),

    _clearCustomClasses: function _clearCustomClasses() {
      this.$('.btn').removeClass().addClass('btn dropdown-toggle btn-default');
    },

    _reTheme: function _reTheme() {
      var sdg_id = this.get('session').get('selected_sdg').get('id');
      var current_sdg_class = 'btn-sdg-' + sdg_id;
      this.set('current_sdg_class', current_sdg_class);

      var dark_color = this.get('session').get('selected_sdg').get('colorHex');
      var light_color = _sdgDashUtilsColors['default'].shadeColor(dark_color, 0.75);
      console.log('light color', light_color, 'dark_color', dark_color);

      this.$('.btn').css('color', dark_color);
      this.$('.btn').css('border-color', dark_color);

      var elId = '#country-selector';
      var holderEl = null;
      this.$(elId).on('show.bs.select', (function () {
        holderEl = this.$('.dropdown-menu .inner li.selected.active a').css('background-color', dark_color).css('color', 'white');
      }).bind(this));
      this.$(elId).on('hide.bs.select', (function () {
        holderEl.css('background-color', 'white').css('color', '#4C4C4C');
      }).bind(this));
    },

    mouseEnter: function mouseEnter() {
      this.$('.btn').removeClass('btn-default').addClass(this.get('current_sdg_class'));
    },
    mouseLeave: function mouseLeave() {
      this.$('.btn').removeClass(this.get('current_sdg_class')).addClass('btn-default');
    }

  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/country-select-box/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 202,
            "column": 9
          }
        },
        "moduleName": "sdg-dash/components/country-select-box/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("select");
        dom.setAttribute(el1, "id", "country-selector");
        dom.setAttribute(el1, "class", "selectpicker");
        dom.setAttribute(el1, "data-live-search", "true");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("optgroup");
        dom.setAttribute(el2, "label", "Countries");
        dom.setAttribute(el2, "value", "countries");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "GLOBAL,Global Progress");
        dom.setAttribute(el3, "value", "GLOBAL");
        var el4 = dom.createTextNode(" Global Progress ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "AF,Afghanistan");
        dom.setAttribute(el3, "value", "AF");
        var el4 = dom.createTextNode(" Afghanistan ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "AL,Albania");
        dom.setAttribute(el3, "value", "AL");
        var el4 = dom.createTextNode(" Albania ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "DZ,Algeria");
        dom.setAttribute(el3, "value", "DZ");
        var el4 = dom.createTextNode(" Algeria ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "AD,Andorra");
        dom.setAttribute(el3, "value", "AD");
        var el4 = dom.createTextNode(" Andorra ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "AO,Angola");
        dom.setAttribute(el3, "value", "AO");
        var el4 = dom.createTextNode(" Angola ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "AG,Antigua and Barbuda");
        dom.setAttribute(el3, "value", "AG");
        var el4 = dom.createTextNode(" Antigua and Barbuda ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "AR,Argentina");
        dom.setAttribute(el3, "value", "AR");
        var el4 = dom.createTextNode(" Argentina ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "AM,Armenia");
        dom.setAttribute(el3, "value", "AM");
        var el4 = dom.createTextNode(" Armenia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "AU,Australia");
        dom.setAttribute(el3, "value", "AU");
        var el4 = dom.createTextNode(" Australia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "AT,Austria");
        dom.setAttribute(el3, "value", "AT");
        var el4 = dom.createTextNode(" Austria ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "AZ,Azerbaijan");
        dom.setAttribute(el3, "value", "AZ");
        var el4 = dom.createTextNode(" Azerbaijan ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "BS,Bahamas");
        dom.setAttribute(el3, "value", "BS");
        var el4 = dom.createTextNode(" Bahamas ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "BH,Bahrain");
        dom.setAttribute(el3, "value", "BH");
        var el4 = dom.createTextNode(" Bahrain ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "BD,Bangladesh");
        dom.setAttribute(el3, "value", "BD");
        var el4 = dom.createTextNode(" Bangladesh ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "BB,Barbados");
        dom.setAttribute(el3, "value", "BB");
        var el4 = dom.createTextNode(" Barbados ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "BY,Belarus");
        dom.setAttribute(el3, "value", "BY");
        var el4 = dom.createTextNode(" Belarus ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "BE,Belgium");
        dom.setAttribute(el3, "value", "BE");
        var el4 = dom.createTextNode(" Belgium ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "BZ,Belize");
        dom.setAttribute(el3, "value", "BZ");
        var el4 = dom.createTextNode(" Belize ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "BJ,Benin");
        dom.setAttribute(el3, "value", "BJ");
        var el4 = dom.createTextNode(" Benin ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "BT,Bhutan");
        dom.setAttribute(el3, "value", "BT");
        var el4 = dom.createTextNode(" Bhutan ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "BO,Bolivia (Plurinational State of)");
        dom.setAttribute(el3, "value", "BO");
        var el4 = dom.createTextNode(" Bolivia (Plurinational State of) ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "BA,Bosnia and Herzegovina");
        dom.setAttribute(el3, "value", "BA");
        var el4 = dom.createTextNode(" Bosnia and Herzegovina ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "BW,Botswana");
        dom.setAttribute(el3, "value", "BW");
        var el4 = dom.createTextNode(" Botswana ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "BR,Brazil");
        dom.setAttribute(el3, "value", "BR");
        var el4 = dom.createTextNode(" Brazil ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "BN,Brunei Darussalam");
        dom.setAttribute(el3, "value", "BN");
        var el4 = dom.createTextNode(" Brunei Darussalam ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "BG,Bulgaria");
        dom.setAttribute(el3, "value", "BG");
        var el4 = dom.createTextNode(" Bulgaria ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "BF,Burkina Faso");
        dom.setAttribute(el3, "value", "BF");
        var el4 = dom.createTextNode(" Burkina Faso ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "BI,Burundi");
        dom.setAttribute(el3, "value", "BI");
        var el4 = dom.createTextNode(" Burundi ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "CV,Cabo Verde");
        dom.setAttribute(el3, "value", "CV");
        var el4 = dom.createTextNode(" Cabo Verde ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "KH,Cambodia");
        dom.setAttribute(el3, "value", "KH");
        var el4 = dom.createTextNode(" Cambodia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "CM,Cameroon");
        dom.setAttribute(el3, "value", "CM");
        var el4 = dom.createTextNode(" Cameroon ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "CA,Canada");
        dom.setAttribute(el3, "value", "CA");
        var el4 = dom.createTextNode(" Canada ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "CF,Central African Republic");
        dom.setAttribute(el3, "value", "CF");
        var el4 = dom.createTextNode(" Central African Republic ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "TD,Chad");
        dom.setAttribute(el3, "value", "TD");
        var el4 = dom.createTextNode(" Chad ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "CL,Chile");
        dom.setAttribute(el3, "value", "CL");
        var el4 = dom.createTextNode(" Chile ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "CN,China");
        dom.setAttribute(el3, "value", "CN");
        var el4 = dom.createTextNode(" China ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "CO,Colombia");
        dom.setAttribute(el3, "value", "CO");
        var el4 = dom.createTextNode(" Colombia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "KM,Comoros");
        dom.setAttribute(el3, "value", "KM");
        var el4 = dom.createTextNode(" Comoros ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "CG,Congo");
        dom.setAttribute(el3, "value", "CG");
        var el4 = dom.createTextNode(" Congo ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "CR,Costa Rica");
        dom.setAttribute(el3, "value", "CR");
        var el4 = dom.createTextNode(" Costa Rica ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "CI,Côte D'Ivoire");
        dom.setAttribute(el3, "value", "CI");
        var el4 = dom.createTextNode(" Côte D'Ivoire ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "HR,Croatia");
        dom.setAttribute(el3, "value", "HR");
        var el4 = dom.createTextNode(" Croatia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "CU,Cuba");
        dom.setAttribute(el3, "value", "CU");
        var el4 = dom.createTextNode(" Cuba ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "CY,Cyprus");
        dom.setAttribute(el3, "value", "CY");
        var el4 = dom.createTextNode(" Cyprus ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "CZ,Czech Republic");
        dom.setAttribute(el3, "value", "CZ");
        var el4 = dom.createTextNode(" Czech Republic ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "KP,Democratic People's Republic of Korea");
        dom.setAttribute(el3, "value", "KP");
        var el4 = dom.createTextNode(" Democratic People's Republic of Korea ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "CD,Democratic Republic of the Congo");
        dom.setAttribute(el3, "value", "CD");
        var el4 = dom.createTextNode(" Democratic Republic of the Congo ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "DK,Denmark");
        dom.setAttribute(el3, "value", "DK");
        var el4 = dom.createTextNode(" Denmark ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "DJ,Djibouti");
        dom.setAttribute(el3, "value", "DJ");
        var el4 = dom.createTextNode(" Djibouti ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "DM,Dominica");
        dom.setAttribute(el3, "value", "DM");
        var el4 = dom.createTextNode(" Dominica ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "DO,Dominican Republic");
        dom.setAttribute(el3, "value", "DO");
        var el4 = dom.createTextNode(" Dominican Republic ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "EC,Ecuador");
        dom.setAttribute(el3, "value", "EC");
        var el4 = dom.createTextNode(" Ecuador ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "EG,Egypt");
        dom.setAttribute(el3, "value", "EG");
        var el4 = dom.createTextNode(" Egypt ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "SV,El Salvador");
        dom.setAttribute(el3, "value", "SV");
        var el4 = dom.createTextNode(" El Salvador ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "GQ,Equatorial Guinea");
        dom.setAttribute(el3, "value", "GQ");
        var el4 = dom.createTextNode(" Equatorial Guinea ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "ER,Eritrea");
        dom.setAttribute(el3, "value", "ER");
        var el4 = dom.createTextNode(" Eritrea ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "EE,Estonia");
        dom.setAttribute(el3, "value", "EE");
        var el4 = dom.createTextNode(" Estonia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "ET,Ethiopia");
        dom.setAttribute(el3, "value", "ET");
        var el4 = dom.createTextNode(" Ethiopia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "FJ,Fiji");
        dom.setAttribute(el3, "value", "FJ");
        var el4 = dom.createTextNode(" Fiji ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "FI,Finland");
        dom.setAttribute(el3, "value", "FI");
        var el4 = dom.createTextNode(" Finland ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "FR,France");
        dom.setAttribute(el3, "value", "FR");
        var el4 = dom.createTextNode(" France ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "GA,Gabon");
        dom.setAttribute(el3, "value", "GA");
        var el4 = dom.createTextNode(" Gabon ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "GM,Gambia (The)");
        dom.setAttribute(el3, "value", "GM");
        var el4 = dom.createTextNode(" Gambia (The) ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "GE,Georgia");
        dom.setAttribute(el3, "value", "GE");
        var el4 = dom.createTextNode(" Georgia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "DE,Germany");
        dom.setAttribute(el3, "value", "DE");
        var el4 = dom.createTextNode(" Germany ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "GH,Ghana");
        dom.setAttribute(el3, "value", "GH");
        var el4 = dom.createTextNode(" Ghana ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "GR,Greece");
        dom.setAttribute(el3, "value", "GR");
        var el4 = dom.createTextNode(" Greece ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "GD,Grenada");
        dom.setAttribute(el3, "value", "GD");
        var el4 = dom.createTextNode(" Grenada ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "GT,Guatemala");
        dom.setAttribute(el3, "value", "GT");
        var el4 = dom.createTextNode(" Guatemala ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "GN,Guinea");
        dom.setAttribute(el3, "value", "GN");
        var el4 = dom.createTextNode(" Guinea ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "GW,Guinea-Bissau");
        dom.setAttribute(el3, "value", "GW");
        var el4 = dom.createTextNode(" Guinea-Bissau ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "GY,Guyana");
        dom.setAttribute(el3, "value", "GY");
        var el4 = dom.createTextNode(" Guyana ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "HT,Haiti");
        dom.setAttribute(el3, "value", "HT");
        var el4 = dom.createTextNode(" Haiti ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "HN,Honduras");
        dom.setAttribute(el3, "value", "HN");
        var el4 = dom.createTextNode(" Honduras ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "HU,Hungary");
        dom.setAttribute(el3, "value", "HU");
        var el4 = dom.createTextNode(" Hungary ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "IS,Iceland");
        dom.setAttribute(el3, "value", "IS");
        var el4 = dom.createTextNode(" Iceland ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "IN,India");
        dom.setAttribute(el3, "value", "IN");
        var el4 = dom.createTextNode(" India ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "ID,Indonesia");
        dom.setAttribute(el3, "value", "ID");
        var el4 = dom.createTextNode(" Indonesia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "IR,Iran (Islamic Republic of)");
        dom.setAttribute(el3, "value", "IR");
        var el4 = dom.createTextNode(" Iran (Islamic Republic of) ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "IQ,Iraq");
        dom.setAttribute(el3, "value", "IQ");
        var el4 = dom.createTextNode(" Iraq ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "IE,Ireland");
        dom.setAttribute(el3, "value", "IE");
        var el4 = dom.createTextNode(" Ireland ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "IL,Israel");
        dom.setAttribute(el3, "value", "IL");
        var el4 = dom.createTextNode(" Israel ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "IT,Italy");
        dom.setAttribute(el3, "value", "IT");
        var el4 = dom.createTextNode(" Italy ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "JM,Jamaica");
        dom.setAttribute(el3, "value", "JM");
        var el4 = dom.createTextNode(" Jamaica ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "JP,Japan");
        dom.setAttribute(el3, "value", "JP");
        var el4 = dom.createTextNode(" Japan ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "JO,Jordan");
        dom.setAttribute(el3, "value", "JO");
        var el4 = dom.createTextNode(" Jordan ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "KZ,Kazakhstan");
        dom.setAttribute(el3, "value", "KZ");
        var el4 = dom.createTextNode(" Kazakhstan ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "KE,Kenya");
        dom.setAttribute(el3, "value", "KE");
        var el4 = dom.createTextNode(" Kenya ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "KI,Kiribati");
        dom.setAttribute(el3, "value", "KI");
        var el4 = dom.createTextNode(" Kiribati ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "KW,Kuwait");
        dom.setAttribute(el3, "value", "KW");
        var el4 = dom.createTextNode(" Kuwait ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "KG,Kyrgyzstan");
        dom.setAttribute(el3, "value", "KG");
        var el4 = dom.createTextNode(" Kyrgyzstan ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "LA,Lao People's Democratic Republic");
        dom.setAttribute(el3, "value", "LA");
        var el4 = dom.createTextNode(" Lao People's Democratic Republic ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "LV,Latvia");
        dom.setAttribute(el3, "value", "LV");
        var el4 = dom.createTextNode(" Latvia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "LB,Lebanon");
        dom.setAttribute(el3, "value", "LB");
        var el4 = dom.createTextNode(" Lebanon ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "LS,Lesotho");
        dom.setAttribute(el3, "value", "LS");
        var el4 = dom.createTextNode(" Lesotho ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "LR,Liberia");
        dom.setAttribute(el3, "value", "LR");
        var el4 = dom.createTextNode(" Liberia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "LY,Libya");
        dom.setAttribute(el3, "value", "LY");
        var el4 = dom.createTextNode(" Libya ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "LI,Liechtenstein");
        dom.setAttribute(el3, "value", "LI");
        var el4 = dom.createTextNode(" Liechtenstein ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "LT,Lithuania");
        dom.setAttribute(el3, "value", "LT");
        var el4 = dom.createTextNode(" Lithuania ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "LU,Luxembourg");
        dom.setAttribute(el3, "value", "LU");
        var el4 = dom.createTextNode(" Luxembourg ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "MG,Madagascar");
        dom.setAttribute(el3, "value", "MG");
        var el4 = dom.createTextNode(" Madagascar ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "MW,Malawi");
        dom.setAttribute(el3, "value", "MW");
        var el4 = dom.createTextNode(" Malawi ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "MY,Malaysia");
        dom.setAttribute(el3, "value", "MY");
        var el4 = dom.createTextNode(" Malaysia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "MV,Maldives");
        dom.setAttribute(el3, "value", "MV");
        var el4 = dom.createTextNode(" Maldives ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "ML,Mali");
        dom.setAttribute(el3, "value", "ML");
        var el4 = dom.createTextNode(" Mali ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "MT,Malta");
        dom.setAttribute(el3, "value", "MT");
        var el4 = dom.createTextNode(" Malta ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "MH,Marshall Islands");
        dom.setAttribute(el3, "value", "MH");
        var el4 = dom.createTextNode(" Marshall Islands ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "MR,Mauritania");
        dom.setAttribute(el3, "value", "MR");
        var el4 = dom.createTextNode(" Mauritania ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "MU,Mauritius");
        dom.setAttribute(el3, "value", "MU");
        var el4 = dom.createTextNode(" Mauritius ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "MX,Mexico");
        dom.setAttribute(el3, "value", "MX");
        var el4 = dom.createTextNode(" Mexico ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "FM,Micronesia (Federated States of)");
        dom.setAttribute(el3, "value", "FM");
        var el4 = dom.createTextNode(" Micronesia (Federated States of)");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "MC,Monaco");
        dom.setAttribute(el3, "value", "MC");
        var el4 = dom.createTextNode(" Monaco ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "MN,Mongolia");
        dom.setAttribute(el3, "value", "MN");
        var el4 = dom.createTextNode(" Mongolia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "ME,Montenegro");
        dom.setAttribute(el3, "value", "ME");
        var el4 = dom.createTextNode(" Montenegro ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "MA,Morocco");
        dom.setAttribute(el3, "value", "MA");
        var el4 = dom.createTextNode(" Morocco ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "MZ,Mozambique");
        dom.setAttribute(el3, "value", "MZ");
        var el4 = dom.createTextNode(" Mozambique ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "MM,Myanmar");
        dom.setAttribute(el3, "value", "MM");
        var el4 = dom.createTextNode(" Myanmar ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "NA,Namibia");
        dom.setAttribute(el3, "value", "NA");
        var el4 = dom.createTextNode(" Namibia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "NR,Nauru");
        dom.setAttribute(el3, "value", "NR");
        var el4 = dom.createTextNode(" Nauru ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "NP,Nepal");
        dom.setAttribute(el3, "value", "NP");
        var el4 = dom.createTextNode(" Nepal ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "NL,Netherlands");
        dom.setAttribute(el3, "value", "NL");
        var el4 = dom.createTextNode(" Netherlands ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "NZ,New Zealand");
        dom.setAttribute(el3, "value", "NZ");
        var el4 = dom.createTextNode(" New Zealand ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "NI,Nicaragua");
        dom.setAttribute(el3, "value", "NI");
        var el4 = dom.createTextNode(" Nicaragua ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "NE,Niger");
        dom.setAttribute(el3, "value", "NE");
        var el4 = dom.createTextNode(" Niger ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "NG,Nigeria");
        dom.setAttribute(el3, "value", "NG");
        var el4 = dom.createTextNode(" Nigeria ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "NO,Norway");
        dom.setAttribute(el3, "value", "NO");
        var el4 = dom.createTextNode(" Norway ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "OM,Oman");
        dom.setAttribute(el3, "value", "OM");
        var el4 = dom.createTextNode(" Oman ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "PK,Pakistan");
        dom.setAttribute(el3, "value", "PK");
        var el4 = dom.createTextNode(" Pakistan ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "PW,Palau");
        dom.setAttribute(el3, "value", "PW");
        var el4 = dom.createTextNode(" Palau ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "PA,Panama");
        dom.setAttribute(el3, "value", "PA");
        var el4 = dom.createTextNode(" Panama ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "PG,Papua New Guinea");
        dom.setAttribute(el3, "value", "PG");
        var el4 = dom.createTextNode(" Papua New Guinea ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "PY,Paraguay");
        dom.setAttribute(el3, "value", "PY");
        var el4 = dom.createTextNode(" Paraguay ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "PE,Peru");
        dom.setAttribute(el3, "value", "PE");
        var el4 = dom.createTextNode(" Peru ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "PH,Philippines");
        dom.setAttribute(el3, "value", "PH");
        var el4 = dom.createTextNode(" Philippines ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "PL,Poland");
        dom.setAttribute(el3, "value", "PL");
        var el4 = dom.createTextNode(" Poland ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "PT,Portugal");
        dom.setAttribute(el3, "value", "PT");
        var el4 = dom.createTextNode(" Portugal ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "QA,Qatar");
        dom.setAttribute(el3, "value", "QA");
        var el4 = dom.createTextNode(" Qatar ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "KR,Republic of Korea");
        dom.setAttribute(el3, "value", "KR");
        var el4 = dom.createTextNode(" Republic of Korea ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "MD,Republic of Moldova");
        dom.setAttribute(el3, "value", "MD");
        var el4 = dom.createTextNode(" Republic of Moldova ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "RO,Romania");
        dom.setAttribute(el3, "value", "RO");
        var el4 = dom.createTextNode(" Romania ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "RU,Russian Federation");
        dom.setAttribute(el3, "value", "RU");
        var el4 = dom.createTextNode(" Russian Federation ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "RW,Rwanda");
        dom.setAttribute(el3, "value", "RW");
        var el4 = dom.createTextNode(" Rwanda ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "KN,Saint Kitts and Nevis");
        dom.setAttribute(el3, "value", "KN");
        var el4 = dom.createTextNode(" Saint Kitts and Nevis ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "LC,Saint Lucia");
        dom.setAttribute(el3, "value", "LC");
        var el4 = dom.createTextNode(" Saint Lucia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "VC,Saint Vincent and the Grenadines");
        dom.setAttribute(el3, "value", "VC");
        var el4 = dom.createTextNode(" Saint Vincent and the Grenadines ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "WS,Samoa");
        dom.setAttribute(el3, "value", "WS");
        var el4 = dom.createTextNode(" Samoa ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "SM,San Marino");
        dom.setAttribute(el3, "value", "SM");
        var el4 = dom.createTextNode(" San Marino ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "ST,Sao Tome and Principe");
        dom.setAttribute(el3, "value", "ST");
        var el4 = dom.createTextNode(" Sao Tome and Principe ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "SA,Saudi Arabia");
        dom.setAttribute(el3, "value", "SA");
        var el4 = dom.createTextNode(" Saudi Arabia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "SN,Senegal");
        dom.setAttribute(el3, "value", "SN");
        var el4 = dom.createTextNode(" Senegal ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "RS,Serbia");
        dom.setAttribute(el3, "value", "RS");
        var el4 = dom.createTextNode(" Serbia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "SC,Seychelles");
        dom.setAttribute(el3, "value", "SC");
        var el4 = dom.createTextNode(" Seychelles ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "SL,Sierra Leone");
        dom.setAttribute(el3, "value", "SL");
        var el4 = dom.createTextNode(" Sierra Leone ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "SG,Singapore");
        dom.setAttribute(el3, "value", "SG");
        var el4 = dom.createTextNode(" Singapore ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "SK,Slovakia");
        dom.setAttribute(el3, "value", "SK");
        var el4 = dom.createTextNode(" Slovakia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "SI,Slovenia");
        dom.setAttribute(el3, "value", "SI");
        var el4 = dom.createTextNode(" Slovenia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "SB,Solomon Islands");
        dom.setAttribute(el3, "value", "SB");
        var el4 = dom.createTextNode(" Solomon Islands ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "SO,Somalia");
        dom.setAttribute(el3, "value", "SO");
        var el4 = dom.createTextNode(" Somalia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "ZA,South Africa");
        dom.setAttribute(el3, "value", "ZA");
        var el4 = dom.createTextNode(" South Africa ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "SS,South Sudan");
        dom.setAttribute(el3, "value", "SS");
        var el4 = dom.createTextNode(" South Sudan ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "ES,Spain");
        dom.setAttribute(el3, "value", "ES");
        var el4 = dom.createTextNode(" Spain ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "LK,Sri Lanka");
        dom.setAttribute(el3, "value", "LK");
        var el4 = dom.createTextNode(" Sri Lanka ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "SD,Sudan");
        dom.setAttribute(el3, "value", "SD");
        var el4 = dom.createTextNode(" Sudan ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "SR,Suriname");
        dom.setAttribute(el3, "value", "SR");
        var el4 = dom.createTextNode(" Suriname ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "SZ,Swaziland");
        dom.setAttribute(el3, "value", "SZ");
        var el4 = dom.createTextNode(" Swaziland ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "SE,Sweden");
        dom.setAttribute(el3, "value", "SE");
        var el4 = dom.createTextNode(" Sweden ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "CH,Switzerland");
        dom.setAttribute(el3, "value", "CH");
        var el4 = dom.createTextNode(" Switzerland ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "SY,Syrian Arab Republic");
        dom.setAttribute(el3, "value", "SY");
        var el4 = dom.createTextNode(" Syrian Arab Republic ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "TJ,Tajikistan");
        dom.setAttribute(el3, "value", "TJ");
        var el4 = dom.createTextNode(" Tajikistan ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "TH,Thailand");
        dom.setAttribute(el3, "value", "TH");
        var el4 = dom.createTextNode(" Thailand ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "MK,The former Yugoslav Republic of Macedonia");
        dom.setAttribute(el3, "value", "MK");
        var el4 = dom.createTextNode(" The former Yugoslav Republic of Macedonia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "TL,Timor-Leste");
        dom.setAttribute(el3, "value", "TL");
        var el4 = dom.createTextNode(" Timor-Leste ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "TG,Togo");
        dom.setAttribute(el3, "value", "TG");
        var el4 = dom.createTextNode(" Togo ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "TO,Tonga");
        dom.setAttribute(el3, "value", "TO");
        var el4 = dom.createTextNode(" Tonga ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "TT,Trinidad and Tobago");
        dom.setAttribute(el3, "value", "TT");
        var el4 = dom.createTextNode(" Trinidad and Tobago ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "TN,Tunisia");
        dom.setAttribute(el3, "value", "TN");
        var el4 = dom.createTextNode(" Tunisia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "TR,Turkey");
        dom.setAttribute(el3, "value", "TR");
        var el4 = dom.createTextNode(" Turkey ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "TM,Turkmenistan");
        dom.setAttribute(el3, "value", "TM");
        var el4 = dom.createTextNode(" Turkmenistan ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "TV,Tuvalu");
        dom.setAttribute(el3, "value", "TV");
        var el4 = dom.createTextNode(" Tuvalu ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "UG,Uganda");
        dom.setAttribute(el3, "value", "UG");
        var el4 = dom.createTextNode(" Uganda ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "UA,Ukraine");
        dom.setAttribute(el3, "value", "UA");
        var el4 = dom.createTextNode(" Ukraine ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "AE,United Arab Emirates");
        dom.setAttribute(el3, "value", "AE");
        var el4 = dom.createTextNode(" United Arab Emirates ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "GB,United Kingdom of Great Britain and Northern Ireland");
        dom.setAttribute(el3, "value", "GB");
        var el4 = dom.createTextNode(" United Kingdom of Great Britain and Northern Ireland ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "TZ,United Republic of Tanzania");
        dom.setAttribute(el3, "value", "TZ");
        var el4 = dom.createTextNode(" United Republic of Tanzania ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "US,United States of America");
        dom.setAttribute(el3, "value", "US");
        var el4 = dom.createTextNode(" United States of America ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "UY,Uruguay");
        dom.setAttribute(el3, "value", "UY");
        var el4 = dom.createTextNode(" Uruguay ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "UZ,Uzbekistan");
        dom.setAttribute(el3, "value", "UZ");
        var el4 = dom.createTextNode(" Uzbekistan ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "VU,Vanuatu");
        dom.setAttribute(el3, "value", "VU");
        var el4 = dom.createTextNode(" Vanuatu ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "VE,Venezuela (Bolivarian Republic of)");
        dom.setAttribute(el3, "value", "VE");
        var el4 = dom.createTextNode(" Venezuela (Bolivarian Republic of)");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "VN,Viet Nam");
        dom.setAttribute(el3, "value", "VN");
        var el4 = dom.createTextNode(" Viet Nam ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "YE,Yemen");
        dom.setAttribute(el3, "value", "YE");
        var el4 = dom.createTextNode(" Yemen ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "ZM,Zambia");
        dom.setAttribute(el3, "value", "ZM");
        var el4 = dom.createTextNode(" Zambia ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "ZW,Zimbabwe");
        dom.setAttribute(el3, "value", "ZW");
        var el4 = dom.createTextNode(" Zimbabwe ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("optgroup");
        dom.setAttribute(el2, "label", "Cities");
        dom.setAttribute(el2, "value", "cities");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "Global Progress");
        dom.setAttribute(el3, "value", "GLOBAL_CITIES");
        var el4 = dom.createTextNode(" Global Progress ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("option");
        dom.setAttribute(el3, "data-tokens", "Bogota");
        dom.setAttribute(el3, "value", "city_BOGOTA");
        var el4 = dom.createTextNode("Bogota");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
efineday('sdg-dash/components/data-info-popover/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    didInsertElement: function didInsertElement() {
      var data_info = this.get('model');

      var info = '<div><p class="text-muted"><u>Source</u></p><p class="text-primary">';

      if (data_info.source_url) {
        info += '<a href="' + data_info.source_url + '" target="_blank">' + data_info.source + '</a><span class="glyphicon glyphicon-share-alt"></span></p></div><div><p class="text-muted"><u>Provider</u></p><p class="text-primary">' + data_info.provider + '</p></div>';
      } else {
        info += data_info.source + '</p></div><div><p class="text-muted"><u>Provider</u></p><p class="text-primary">' + data_info.provider + '</p></div>';
      }

      if (data_info.method_url) {
        info += '<div><p class="text-muted"><u>Definition</u></p>\n              <span class="text-primary"><a href="' + data_info.method_url + '" target="_blank">' + data_info.method_name + '</a></span>\n              <span class="glyphicon glyphicon-share-alt"></span></div>';
      }

      this.$('#popover-' + this.elementId).popover({ content: info });
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/data-info-popover/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 7
          }
        },
        "moduleName": "sdg-dash/components/data-info-popover/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("span");
        dom.setAttribute(el1, "class", "glyphicon glyphicon-info-sign");
        dom.setAttribute(el1, "style", "cursor:pointer;");
        dom.setAttribute(el1, "aria-hidden", "true");
        dom.setAttribute(el1, "tabindex", "0");
        dom.setAttribute(el1, "data-toggle", "popover");
        dom.setAttribute(el1, "data-trigger", "focus");
        dom.setAttribute(el1, "data-html", "true");
        dom.setAttribute(el1, "data-placement", "top");
        dom.setAttribute(el1, "data-container", "body");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(1);
        morphs[0] = dom.createAttrMorph(element0, 'id');
        return morphs;
      },
      statements: [["attribute", "id", ["concat", ["popover-", ["get", "this.elementId", ["loc", [null, [2, 16], [2, 30]]]]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('sdg-dash/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
efineday('sdg-dash/components/featured-datasets-card/component', ['exports', 'ember-cli-opendata-pages/components/featured-datasets-card/component'], function (exports, _emberCliOpendataPagesComponentsFeaturedDatasetsCardComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsFeaturedDatasetsCardComponent['default'];
    }
  });
});
efineday('sdg-dash/components/geo-levels-select-box/component', ['exports', 'ember', 'sdg-dash/utils/colors'], function (exports, _ember, _sdgDashUtilsColors) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['btn btn-nocursor'],

    didInsertElement: function didInsertElement() {
      var elId = '#geo-levels-selector';
      this.$(elId).selectpicker({
        style: 'btn-default',
        selectOnTab: true,
        size: 8,
        noneSelectedText: 'No Data',
        width: '210px'
      });

      this.$(elId).on('change', (function () {
        var sel = this.$(elId).val();

        var levels = this.get('session').get('available_dashboard_levels');
        var new_level = levels.filter(function (l) {
          return l.title === sel;
        })[0];
        this.get('session').set('selected_dashboard', new_level);

        this.sendAction('goToGeoLevel', sel);
      }).bind(this));

      this._reTheme();
    },

    didUpdate: function didUpdate() {
      var elId = '#geo-levels-selector';
      var len = this.get('session').get('available_geo_levels').length;
      var disabled = len <= 1 ? true : false;
      this.$(elId).prop('disabled', disabled);
      var val = this.get('session').get('selected_geo_level');
      this.$(elId).selectpicker('val', val);
      this.$(elId).selectpicker('refresh');
    },

    sessionRouteChanged: _ember['default'].observer('session.selected_sdg', function () {
      this._clearCustomClasses();
      this._reTheme();
    }),

    _clearCustomClasses: function _clearCustomClasses() {
      _ember['default'].$('#' + this.elementId + ' .btn').removeClass().addClass('btn dropdown-toggle btn-default');
    },

    _reTheme: function _reTheme() {
      var dark_color = this.get('session').get('selected_sdg').get('colorHex');
      var light_color = _sdgDashUtilsColors['default'].shadeColor(dark_color, 0.75);
      console.log('light color', light_color, 'dark_color', dark_color);

      _ember['default'].$('#' + this.elementId + ' .btn').css('color', dark_color);
      _ember['default'].$('#' + this.elementId + ' .btn').css('border-color', dark_color);

      var elId = '#geo-levels-selector';
      var holderEl = null;
      this.$(elId).on('show.bs.select', (function () {
        holderEl = this.$('.dropdown-menu .inner li.selected.active a').css('background-color', dark_color);
      }).bind(this));
      this.$(elId).on('hide.bs.select', (function () {
        holderEl.css('background-color', 'white');
      }).bind(this));

      var sdg_id = this.get('session').get('selected_sdg').get('id');
      var current_sdg_class = 'btn-sdg-' + sdg_id;
      this.set('current_sdg_class', current_sdg_class);
    },

    mouseEnter: function mouseEnter() {
      _ember['default'].$('#' + this.elementId + ' .btn').removeClass('btn-default').addClass(this.get('current_sdg_class'));
    },
    mouseLeave: function mouseLeave() {
      _ember['default'].$('#' + this.elementId + ' .btn').removeClass(this.get('current_sdg_class')).addClass('btn-default');
    }

  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/geo-levels-select-box/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 2
            }
          },
          "moduleName": "sdg-dash/components/geo-levels-select-box/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "level", ["loc", [null, [3, 12], [3, 21]]]]],
        locals: ["level"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 9
          }
        },
        "moduleName": "sdg-dash/components/geo-levels-select-box/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("select");
        dom.setAttribute(el1, "id", "geo-levels-selector");
        dom.setAttribute(el1, "class", "selectpicker");
        dom.setAttribute(el1, "data-live-search", "true");
        dom.setAttribute(el1, "disabled", "");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "session.available_geo_levels", ["loc", [null, [2, 10], [2, 38]]]]], [], 0, null, ["loc", [null, [2, 2], [4, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
efineday('sdg-dash/components/geography-search-box/component', ['exports', 'ember', 'ic-ajax', 'sdg-dash/config/environment', 'sdg-dash/utils/colors'], function (exports, _ember, _icAjax, _sdgDashConfigEnvironment, _sdgDashUtilsColors) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'input',
    classNames: ['form-control'],
    minLength: 2,
    value: 'Global',

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);
      this.initTypeahead();
    },

    initTypeahead: function initTypeahead() {
      var _this = this;

      (0, _icAjax['default'])({
        url: _sdgDashConfigEnvironment['default'].sdgDashboardsApi + 'geographies',
        dataType: 'json'
      }).then(function (response) {
        console.log(response);

        if (!response.data || response.data.length === 0) {
          _ember['default'].debug('no data returned when looking for geographies for selector');
          return;
        }

        var qp = _this.get('container').lookup('router:main').router.state.queryParams;
        if (qp && qp.geo_group && qp.geo_value) {
          var display_name = response.data.filter(function (item) {
            return item.id === qp.geo_value;
          })[0].display;

          _this.$().val(display_name);
        } else {
          _this.$().val('Global Progress');
        }

        var countries_data = [];
        var cities_data = [];
        response.data.forEach(function (geo) {
          if (geo.geo_group === 'countries') {
            countries_data.push(geo);
          } else if (geo.geo_group === 'cities') {
            cities_data.push(geo);
          }
        }, _this);

        var countries = new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.obj.whitespace('display', 'id'),
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          local: countries_data
        });

        var cities = new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.obj.whitespace('display', 'id'),
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          local: cities_data
        });

        _this.$().typeahead({ highlight: true }, {
          name: 'countries',
          source: countries,
          display: 'display',
          templates: {
            header: '<p class="geo-header">Countries</p>'
          }
        }, {
          name: 'cities',
          source: cities,
          display: 'display',
          templates: {
            header: '<p class="geo-header">Cities</p>'
          }
        });

        _this.$().bind('typeahead:selected', function (ev, suggestion) {
          console.log(suggestion);
        });
        _this.$().bind('typeahead:select', (function (ev, suggestion) {
          if (!suggestion || !suggestion.geo_group || !suggestion.id) {
            return;
          }
          var selected_geo_group = suggestion.geo_group;
          var selected_geo_value = suggestion.id;
          var svc = this.get('session');
          svc.set('selected_geo_group', selected_geo_group);
          svc.set('selected_geo_value', selected_geo_value);

          this.get('goToGeography')(selected_geo_group, selected_geo_value);
        }).bind(_this));

        _this._reTheme();
      })['catch'](function (error) {
        console.log('error getting geographies for selector: ', error);
      });
    },

    sessionRouteChanged: _ember['default'].observer('session.selected_sdg', function () {
      this._clearCustomClasses();
      this._reTheme();
    }),

    _clearCustomClasses: function _clearCustomClasses() {
      _ember['default'].$('#' + this.elementId + ' .btn').removeClass().addClass('btn dropdown-toggle btn-default');
    },

    _reTheme: function _reTheme() {

      var dark_color = this.get('session').get('selected_sdg').get('colorHex');
      var light_color = _sdgDashUtilsColors['default'].shadeColor(dark_color, 0.75);
      console.log('light color', light_color, 'dark_color', dark_color);

      this.$().css('color', dark_color);
      this.$().css('border-color', dark_color);
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/geography-search-box/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 9
          }
        },
        "moduleName": "sdg-dash/components/geography-search-box/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('sdg-dash/components/grid-layout/component', ['exports', 'ember-cli-opendata-pages/components/grid-layout/component'], function (exports, _emberCliOpendataPagesComponentsGridLayoutComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsGridLayoutComponent['default'];
    }
  });
});
efineday('sdg-dash/components/indicator-sheet/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/indicator-sheet/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "sdg-dash/components/indicator-sheet/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('sdg-dash/components/ivy-videojs-player', ['exports', 'ivy-videojs/components/ivy-videojs-player'], function (exports, _ivyVideojsComponentsIvyVideojsPlayer) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _ivyVideojsComponentsIvyVideojsPlayer['default'];
    }
  });
});
efineday('sdg-dash/components/ivy-videojs', ['exports', 'ivy-videojs/components/ivy-videojs'], function (exports, _ivyVideojsComponentsIvyVideojs) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _ivyVideojsComponentsIvyVideojs['default'];
    }
  });
});
efineday('sdg-dash/components/jumbotron-card/component', ['exports', 'ember-cli-opendata-pages/components/jumbotron-card/component'], function (exports, _emberCliOpendataPagesComponentsJumbotronCardComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsJumbotronCardComponent['default'];
    }
  });
});
efineday('sdg-dash/components/jumbotron-card-editor/component', ['exports', 'ember-cli-opendata-pages/components/jumbotron-card-editor/component'], function (exports, _emberCliOpendataPagesComponentsJumbotronCardEditorComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsJumbotronCardEditorComponent['default'];
    }
  });
});
efineday('sdg-dash/components/layout-row/component', ['exports', 'ember-cli-opendata-pages/components/layout-row/component'], function (exports, _emberCliOpendataPagesComponentsLayoutRowComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsLayoutRowComponent['default'];
    }
  });
});
efineday("sdg-dash/components/lf-outlet", ["exports", "liquid-fire/ember-internals"], function (exports, _liquidFireEmberInternals) {
  exports["default"] = _liquidFireEmberInternals.StaticOutlet;
});
efineday('sdg-dash/components/lf-overlay', ['exports', 'ember'], function (exports, _ember) {
  var COUNTER = '__lf-modal-open-counter';

  exports['default'] = _ember['default'].Component.extend({
    tagName: 'span',
    classNames: ['lf-overlay'],

    didInsertElement: function didInsertElement() {
      var body = _ember['default'].$('body');
      var counter = body.data(COUNTER) || 0;
      body.addClass('lf-modal-open');
      body.data(COUNTER, counter + 1);
    },

    willDestroy: function willDestroy() {
      var body = _ember['default'].$('body');
      var counter = body.data(COUNTER) || 0;
      body.data(COUNTER, counter - 1);
      if (counter < 2) {
        body.removeClass('lf-modal-open lf-modal-closing');
      }
    }
  });
});
efineday('sdg-dash/components/liquid-bind', ['exports', 'ember'], function (exports, _ember) {

  var LiquidBind = _ember['default'].Component.extend({
    tagName: '',
    positionalParams: ['value'] // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
  });

  LiquidBind.reopenClass({
    positionalParams: ['value']
  });

  exports['default'] = LiquidBind;
});
efineday('sdg-dash/components/liquid-child', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['liquid-child'],

    didInsertElement: function didInsertElement() {
      var $container = this.$();
      if ($container) {
        $container.css('visibility', 'hidden');
      }
      this.sendAction('liquidChildDidRender', this);
    }

  });
});
efineday("sdg-dash/components/liquid-container", ["exports", "ember", "liquid-fire/growable", "sdg-dash/components/liquid-measured"], function (exports, _ember, _liquidFireGrowable, _sdgDashComponentsLiquidMeasured) {
  exports["default"] = _ember["default"].Component.extend(_liquidFireGrowable["default"], {
    classNames: ['liquid-container'],

    lockSize: function lockSize(elt, want) {
      elt.outerWidth(want.width);
      elt.outerHeight(want.height);
    },

    unlockSize: function unlockSize() {
      var _this = this;

      var doUnlock = function doUnlock() {
        _this.updateAnimatingClass(false);
        var elt = _this.$();
        if (elt) {
          elt.css({ width: '', height: '' });
        }
      };
      if (this._scaling) {
        this._scaling.then(doUnlock);
      } else {
        doUnlock();
      }
    },

    // We're doing this manually instead of via classNameBindings
    // because it depends on upward-data-flow, which generates warnings
    // under Glimmer.
    updateAnimatingClass: function updateAnimatingClass(on) {
      if (this.isDestroyed || !this._wasInserted) {
        return;
      }
      if (arguments.length === 0) {
        on = this.get('liquidAnimating');
      } else {
        this.set('liquidAnimating', on);
      }
      if (on) {
        this.$().addClass('liquid-animating');
      } else {
        this.$().removeClass('liquid-animating');
      }
    },

    startMonitoringSize: _ember["default"].on('didInsertElement', function () {
      this._wasInserted = true;
      this.updateAnimatingClass();
    }),

    actions: {

      willTransition: function willTransition(versions) {
        if (!this._wasInserted) {
          return;
        }

        // Remember our own size before anything changes
        var elt = this.$();
        this._cachedSize = (0, _sdgDashComponentsLiquidMeasured.measure)(elt);

        // And make any children absolutely positioned with fixed sizes.
        for (var i = 0; i < versions.length; i++) {
          goAbsolute(versions[i]);
        }

        // Apply '.liquid-animating' to liquid-container allowing
        // any customizable CSS control while an animating is occuring
        this.updateAnimatingClass(true);
      },

      afterChildInsertion: function afterChildInsertion(versions) {
        var elt = this.$();
        var enableGrowth = this.get('enableGrowth') !== false;

        // Measure  children
        var sizes = [];
        for (var i = 0; i < versions.length; i++) {
          if (versions[i].view) {
            sizes[i] = (0, _sdgDashComponentsLiquidMeasured.measure)(versions[i].view.$());
          }
        }

        // Measure ourself again to see how big the new children make
        // us.
        var want = (0, _sdgDashComponentsLiquidMeasured.measure)(elt);
        var have = this._cachedSize || want;

        // Make ourself absolute
        if (enableGrowth) {
          this.lockSize(elt, have);
        } else {
          this.lockSize(elt, {
            height: Math.max(want.height, have.height),
            width: Math.max(want.width, have.width)
          });
        }

        // Make the children absolute and fixed size.
        for (i = 0; i < versions.length; i++) {
          goAbsolute(versions[i], sizes[i]);
        }

        // Kick off our growth animation
        if (enableGrowth) {
          this._scaling = this.animateGrowth(elt, have, want);
        }
      },

      afterTransition: function afterTransition(versions) {
        for (var i = 0; i < versions.length; i++) {
          goStatic(versions[i]);
        }
        this.unlockSize();
      }
    }
  });

  function goAbsolute(version, size) {
    if (!version.view) {
      return;
    }
    var elt = version.view.$();
    var pos = elt.position();
    if (!size) {
      size = (0, _sdgDashComponentsLiquidMeasured.measure)(elt);
    }
    elt.outerWidth(size.width);
    elt.outerHeight(size.height);
    elt.css({
      position: 'absolute',
      top: pos.top,
      left: pos.left
    });
  }

  function goStatic(version) {
    if (version.view && !version.view.isDestroyed) {
      version.view.$().css({ width: '', height: '', position: '' });
    }
  }
});
efineday('sdg-dash/components/liquid-if', ['exports', 'ember', 'liquid-fire/ember-internals'], function (exports, _ember, _liquidFireEmberInternals) {

  var LiquidIf = _ember['default'].Component.extend({
    positionalParams: ['predicate'], // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
    tagName: '',
    helperName: 'liquid-if',
    didReceiveAttrs: function didReceiveAttrs() {
      this._super();
      var predicate = (0, _liquidFireEmberInternals.shouldDisplay)(this.getAttr('predicate'));
      this.set('showFirstBlock', this.inverted ? !predicate : predicate);
    }
  });

  LiquidIf.reopenClass({
    positionalParams: ['predicate']
  });

  exports['default'] = LiquidIf;
});
efineday("sdg-dash/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidFireComponentsLiquidMeasured) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured["default"];
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured.measure;
    }
  });
});
efineday('sdg-dash/components/liquid-modal', ['exports', 'ember', 'ember-getowner-polyfill'], function (exports, _ember, _emberGetownerPolyfill) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['liquid-modal'],
    currentContext: _ember['default'].computed('owner.modalContexts.lastObject', function () {
      var context = this.get('owner.modalContexts.lastObject');
      if (context) {
        context.view = this.innerView(context);
      }
      return context;
    }),

    owner: _ember['default'].inject.service('liquid-fire-modals'),

    innerView: function innerView(current) {
      var self = this,
          name = current.get('name'),
          owner = (0, _emberGetownerPolyfill['default'])(this),
          component = owner.lookup('component-lookup:main').lookupFactory(name);
      _ember['default'].assert("Tried to render a modal using component '" + name + "', but couldn't find it.", !!component);

      var args = _ember['default'].copy(current.get('params'));

      args.registerMyself = _ember['default'].on('init', function () {
        self.set('innerViewInstance', this);
      });

      // set source so we can bind other params to it
      args._source = _ember['default'].computed(function () {
        return current.get("source");
      });

      var otherParams = current.get("options.otherParams");
      var from, to;
      for (from in otherParams) {
        to = otherParams[from];
        args[to] = _ember['default'].computed.alias("_source." + from);
      }

      var actions = current.get("options.actions") || {};

      // Override sendAction in the modal component so we can intercept and
      // dynamically dispatch to the controller as expected
      args.sendAction = function (name) {
        var actionName = actions[name];
        if (!actionName) {
          this._super.apply(this, Array.prototype.slice.call(arguments));
          return;
        }

        var controller = current.get("source");
        var args = Array.prototype.slice.call(arguments, 1);
        args.unshift(actionName);
        controller.send.apply(controller, args);
      };

      return component.extend(args);
    },

    actions: {
      outsideClick: function outsideClick() {
        if (this.get('currentContext.options.dismissWithOutsideClick')) {
          this.send('dismiss');
        } else {
          proxyToInnerInstance(this, 'outsideClick');
        }
      },
      escape: function escape() {
        if (this.get('currentContext.options.dismissWithEscape')) {
          this.send('dismiss');
        } else {
          proxyToInnerInstance(this, 'escape');
        }
      },
      dismiss: function dismiss() {
        _ember['default'].$('body').addClass('lf-modal-closing');
        var source = this.get('currentContext.source'),
            proto = source.constructor.proto(),
            params = this.get('currentContext.options.withParams'),
            clearThem = {};

        for (var key in params) {
          if (proto[key] instanceof _ember['default'].ComputedProperty) {
            clearThem[key] = undefined;
          } else {
            clearThem[key] = proto[key];
          }
        }
        source.setProperties(clearThem);
      }
    }
  });

  function proxyToInnerInstance(self, message) {
    var vi = self.get('innerViewInstance');
    if (vi) {
      vi.send(message);
    }
  }
});
efineday('sdg-dash/components/liquid-outlet', ['exports', 'ember'], function (exports, _ember) {

  var LiquidOutlet = _ember['default'].Component.extend({
    positionalParams: ['inputOutletName'], // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
    tagName: '',
    didReceiveAttrs: function didReceiveAttrs() {
      this._super();
      this.set('outletName', this.attrs.inputOutletName || 'main');
    }
  });

  LiquidOutlet.reopenClass({
    positionalParams: ['inputOutletName']
  });

  exports['default'] = LiquidOutlet;
});
efineday("sdg-dash/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidFireComponentsLiquidSpacer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSpacer["default"];
    }
  });
});
efineday('sdg-dash/components/liquid-unless', ['exports', 'sdg-dash/components/liquid-if'], function (exports, _sdgDashComponentsLiquidIf) {
  exports['default'] = _sdgDashComponentsLiquidIf['default'].extend({
    helperName: 'liquid-unless',
    layoutName: 'components/liquid-if',
    inverted: true
  });
});
efineday("sdg-dash/components/liquid-versions", ["exports", "ember", "liquid-fire/ember-internals"], function (exports, _ember, _liquidFireEmberInternals) {

  var get = _ember["default"].get;
  var set = _ember["default"].set;

  exports["default"] = _ember["default"].Component.extend({
    tagName: "",
    name: 'liquid-versions',

    transitionMap: _ember["default"].inject.service('liquid-fire-transitions'),

    didReceiveAttrs: function didReceiveAttrs() {
      this._super();
      if (!this.versions || this._lastVersion !== this.getAttr('value')) {
        this.appendVersion();
        this._lastVersion = this.getAttr('value');
      }
    },

    appendVersion: function appendVersion() {
      var versions = this.versions;
      var firstTime = false;
      var newValue = this.getAttr('value');
      var oldValue;

      if (!versions) {
        firstTime = true;
        versions = _ember["default"].A();
      } else {
        oldValue = versions[0];
      }

      // TODO: may need to extend the comparison to do the same kind of
      // key-based diffing that htmlbars is doing.
      if (!firstTime && (!oldValue && !newValue || oldValue === newValue)) {
        return;
      }

      this.notifyContainer('willTransition', versions);
      var newVersion = {
        value: newValue,
        shouldRender: newValue || get(this, 'renderWhenFalse')
      };
      versions.unshiftObject(newVersion);

      this.firstTime = firstTime;
      if (firstTime) {
        set(this, 'versions', versions);
      }

      if (!newVersion.shouldRender && !firstTime) {
        this._transition();
      }
    },

    _transition: function _transition() {
      var _this = this;

      var versions = get(this, 'versions');
      var transition;
      var firstTime = this.firstTime;
      this.firstTime = false;

      this.notifyContainer('afterChildInsertion', versions);

      transition = get(this, 'transitionMap').transitionFor({
        versions: versions,
        parentElement: _ember["default"].$((0, _liquidFireEmberInternals.containingElement)(this)),
        use: get(this, 'use'),
        // Using strings instead of booleans here is an
        // optimization. The constraint system can match them more
        // efficiently, since it treats boolean constraints as generic
        // "match anything truthy/falsy" predicates, whereas string
        // checks are a direct object property lookup.
        firstTime: firstTime ? 'yes' : 'no',
        helperName: get(this, 'name'),
        outletName: get(this, 'outletName')
      });

      if (this._runningTransition) {
        this._runningTransition.interrupt();
      }
      this._runningTransition = transition;

      transition.run().then(function (wasInterrupted) {
        // if we were interrupted, we don't handle the cleanup because
        // another transition has already taken over.
        if (!wasInterrupted) {
          _this.finalizeVersions(versions);
          _this.notifyContainer("afterTransition", versions);
        }
      }, function (err) {
        _this.finalizeVersions(versions);
        _this.notifyContainer("afterTransition", versions);
        throw err;
      });
    },

    finalizeVersions: function finalizeVersions(versions) {
      versions.replace(1, versions.length - 1);
    },

    notifyContainer: function notifyContainer(method, versions) {
      var target = get(this, 'notify');
      if (target) {
        target.send(method, versions);
      }
    },

    actions: {
      childDidRender: function childDidRender(child) {
        var version = get(child, 'version');
        set(version, 'view', child);
        this._transition();
      }
    }

  });
});
efineday('sdg-dash/components/liquid-with', ['exports', 'ember'], function (exports, _ember) {

  var LiquidWith = _ember['default'].Component.extend({
    name: 'liquid-with',
    positionalParams: ['value'], // needed for Ember 1.13.[0-5] and 2.0.0-beta.[1-3] support
    tagName: '',
    iAmDeprecated: _ember['default'].on('init', function () {
      _ember['default'].deprecate("liquid-with is deprecated, use liquid-bind instead -- it accepts a block now.");
    })
  });

  LiquidWith.reopenClass({
    positionalParams: ['value']
  });

  exports['default'] = LiquidWith;
});
efineday("sdg-dash/components/lm-container", ["exports", "ember", "liquid-fire/tabbable", "liquid-fire/is-browser"], function (exports, _ember, _liquidFireTabbable, _liquidFireIsBrowser) {

  /**
   * If you do something to move focus outside of the browser (like
   * command+l to go to the address bar) and then tab back into the
   * window, capture it and focus the first tabbable element in an active
   * modal.
   */
  var lastOpenedModal = null;

  if ((0, _liquidFireIsBrowser["default"])()) {
    _ember["default"].$(document).on('focusin', handleTabIntoBrowser);
  }

  function handleTabIntoBrowser() {
    if (lastOpenedModal) {
      lastOpenedModal.focus();
    }
  }

  exports["default"] = _ember["default"].Component.extend({
    classNames: ['lm-container'],
    attributeBindings: ['tabindex'],
    tabindex: 0,

    keyUp: function keyUp(event) {
      // Escape key
      if (event.keyCode === 27) {
        this.sendAction();
      }
    },

    keyDown: function keyDown(event) {
      // Tab key
      if (event.keyCode === 9) {
        this.constrainTabNavigation(event);
      }
    },

    didInsertElement: function didInsertElement() {
      this.focus();
      lastOpenedModal = this;
    },

    willDestroy: function willDestroy() {
      lastOpenedModal = null;
    },

    focus: function focus() {
      if (this.get('element').contains(document.activeElement)) {
        // just let it be if we already contain the activeElement
        return;
      }
      var target = this.$('[autofocus]');
      if (!target.length) {
        target = this.$(':tabbable');
      }

      if (!target.length) {
        target = this.$();
      }

      target[0].focus();
    },

    constrainTabNavigation: function constrainTabNavigation(event) {
      var tabbable = this.$(':tabbable');
      var finalTabbable = tabbable[event.shiftKey ? 'first' : 'last']()[0];
      var leavingFinalTabbable = finalTabbable === document.activeElement ||
      // handle immediate shift+tab after opening with mouse
      this.get('element') === document.activeElement;
      if (!leavingFinalTabbable) {
        return;
      }
      event.preventDefault();
      tabbable[event.shiftKey ? 'last' : 'first']()[0].focus();
    },

    click: function click(event) {
      if (event.target === this.get('element')) {
        this.sendAction('clickAway');
      }
    }
  });
});
/*
   Parts of this file were adapted from ic-modal

   https://github.com/instructure/ic-modal
   Released under The MIT License (MIT)
   Copyright (c) 2014 Instructure, Inc.
*/
efineday('sdg-dash/components/loading-slider', ['exports', 'ember'], function (exports, _ember) {
  var Component = _ember['default'].Component;
  var run = _ember['default'].run;
  var isBlank = _ember['default'].isBlank;
  var inject = _ember['default'].inject;
  var on = _ember['default'].on;
  exports['default'] = Component.extend({
    tagName: 'div',
    classNames: ['loading-slider'],
    classNameBindings: 'expanding',

    loadingSlider: inject.service(),

    init: function init() {
      this._super.apply(this, arguments);
      run.once(this, function () {
        this.get('loadingSlider').on('startLoading', this, this._startLoading);
        this.get('loadingSlider').on('endLoading', this, this._endLoading);
        this.get('loadingSlider').on('changeAttrs', this, this._changeAttrs);
      });
    },

    setAttrsThenManage: on('didReceiveAttrs', function () {
      this.setProperties({
        isLoading: this.getAttr('isLoading'),
        duration: this.getAttr('duration'),
        expanding: this.getAttr('expanding'),
        speed: this.getAttr('speed'),
        color: this.getAttr('color')
      });

      this.manage();
    }),

    willDestroy: function willDestroy() {
      run.once(this, function () {
        this.get('loadingSlider').off('startLoading', this, this._startLoading);
        this.get('loadingSlider').off('endLoading', this, this._endLoading);
        this.get('loadingSlider').off('changeAttrs', this, this._changeAttrs);
      });
    },

    _startLoading: function _startLoading() {
      this.set('isLoading', true);
      this.manage();
    },

    _endLoading: function _endLoading() {
      this.set('isLoading', false);
    },

    _changeAttrs: function _changeAttrs(attrs) {
      this.setProperties(attrs);
      this.manage();
    },

    manage: function manage() {
      if (isBlank(this.$())) {
        return;
      }

      if (this.get('isLoading')) {
        if (this.get('expanding')) {
          this.expandingAnimate.call(this);
        } else {
          this.animate.call(this);
        }
      } else {
        this.set('isLoaded', true);
      }
    },

    animate: function animate() {
      this.set('isLoaded', false);
      var self = this,
          elapsedTime = 0,
          inner = $('<span>'),
          outer = this.$(),
          duration = this.getWithDefault('duration', 300),
          innerWidth = 0,
          outerWidth = this.$().width(),
          stepWidth = Math.round(outerWidth / 50),
          color = this.get('color');

      outer.append(inner);
      if (color) {
        inner.css('background-color', color);
      }

      var interval = window.setInterval(function () {
        elapsedTime = elapsedTime + 10;
        inner.width(innerWidth = innerWidth + stepWidth);

        // slow the animation if we used more than 75% the estimated duration
        // or 66% of the animation width
        if (elapsedTime > duration * 0.75 || innerWidth > outerWidth * 0.66) {
          // don't stop the animation completely
          if (stepWidth > 1) {
            stepWidth = stepWidth * 0.97;
          }
        }

        if (innerWidth > outerWidth) {
          run.later(function () {
            outer.empty();
            window.clearInterval(interval);
          }, 50);
        }

        // the activity has finished
        if (self.get('isLoaded')) {
          // start with a sizable pixel step
          if (stepWidth < 10) {
            stepWidth = 10;
          }
          // accelerate to completion
          stepWidth = stepWidth + stepWidth;
        }
      }, 10);
    },

    expandingAnimate: function expandingAnimate() {
      var self = this,
          outer = this.$(),
          speed = this.getWithDefault('speed', 1000),
          colorQueue = this.get('color');

      if ('object' === typeof colorQueue) {
        (function updateFn() {
          var color = colorQueue.shift();
          colorQueue.push(color);
          self.expandItem.call(self, color);
          if (!self.get('isLoading')) {
            outer.empty();
          } else {
            window.setTimeout(updateFn, speed);
          }
        })();
      } else {
        this.expandItem.call(this, colorQueue, true);
      }
    },

    expandItem: function expandItem(color, cleanUp) {
      var self = this,
          inner = $('<span>').css({ 'background-color': color }),
          outer = this.$(),
          innerWidth = 0,
          outerWidth = outer.width(),
          stepWidth = Math.round(outerWidth / 50);
      var ua = window.navigator.userAgent;
      var ie10 = ua.indexOf("MSIE "),
          ie11 = ua.indexOf('Trident/'),
          ieEdge = ua.indexOf('Edge/');

      outer.append(inner);

      var interval = window.setInterval(function () {
        var step = innerWidth = innerWidth + stepWidth;
        if (innerWidth > outerWidth) {
          window.clearInterval(interval);
          if (cleanUp) {
            outer.empty();
          }
        }
        if (ie10 > 0 || ie11 > 0 || ieEdge > 0) {
          inner.css({
            'margin': '0 auto',
            'width': step
          });
        } else {
          inner.css({
            'margin-left': '-' + step / 2 + 'px',
            'width': step
          });
        }
      }, 10);
    },

    didInsertElement: function didInsertElement() {
      this.$().html('<span>');

      var color = this.get('color');
      if (color) {
        this.$('span').css('background-color', color);
      }

      if (this.get('runManageInitially')) {
        this._startLoading();
      }
    }
  });
});
efineday('sdg-dash/components/login-button/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    text: 'Connect using Facebook or Google+'
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.

// authSession: Ember.inject.service('authSession'),

// click() {
//   const authSession = this.get('authSession');
//   if (!authSession.content || !authSession.content.isAuthenticated) {
//     this.get('authSession').open('arcgis-oauth-bearer')
//       .then((authorization) => {
//         Ember.debug('AUTH SUCCESS: ', authorization);
//         this.set('text', 'Logout');
//       })
//       .catch((err)=>{
//         Ember.debug('AUTH ERROR: ', err);
//       });
//   } else {
//     authSession.close();
//     this.set('text', 'Login with Facebook or Google+');
//   }   
// }
efineday("sdg-dash/components/login-button/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 5
          }
        },
        "moduleName": "sdg-dash/components/login-button/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" <div class=\"btn btn-default btn-sm\">{{text}}</div> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h5");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "https://www.arcgis.com/home/signin.html");
        dom.setAttribute(el2, "target", "_blank");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 1]), 0, 0);
        return morphs;
      },
      statements: [["content", "text", ["loc", [null, [3, 68], [3, 76]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('sdg-dash/components/map-card/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/map-card/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 6
            },
            "end": {
              "line": 10,
              "column": 6
            }
          },
          "moduleName": "sdg-dash/components/map-card/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "data-info-popover", [], ["model", ["subexpr", "@mut", [["get", "model.component.settings.data_info", ["loc", [null, [9, 34], [9, 68]]]]], [], []]], ["loc", [null, [9, 8], [9, 70]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 2
            },
            "end": {
              "line": 17,
              "column": 2
            }
          },
          "moduleName": "sdg-dash/components/map-card/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "arcgis-map-sdg-index", [], ["webmap", ["subexpr", "@mut", [["get", "model.component.settings.webmap", ["loc", [null, [16, 34], [16, 65]]]]], [], []], "component", ["subexpr", "@mut", [["get", "model.component", ["loc", [null, [16, 76], [16, 91]]]]], [], []]], ["loc", [null, [16, 4], [16, 93]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 2
            },
            "end": {
              "line": 19,
              "column": 2
            }
          },
          "moduleName": "sdg-dash/components/map-card/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "arcgis-map", [], ["webmap", ["subexpr", "@mut", [["get", "model.component.settings.webmap", ["loc", [null, [18, 24], [18, 55]]]]], [], []], "component", ["subexpr", "@mut", [["get", "model.component", ["loc", [null, [18, 66], [18, 81]]]]], [], []]], ["loc", [null, [18, 4], [18, 83]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 6
          }
        },
        "moduleName": "sdg-dash/components/map-card/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "panel panel-default");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "panel-heading");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "pull-left");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "text-muted");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "pull-right");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "clearfix");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "panel-body no-padding");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(element2, 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        return morphs;
      },
      statements: [["content", "model.component.settings.indicator_id", ["loc", [null, [4, 31], [4, 72]]]], ["content", "model.component.settings.title", ["loc", [null, [5, 6], [5, 40]]]], ["block", "if", [["get", "model.component.settings.data_info", ["loc", [null, [8, 12], [8, 46]]]]], [], 0, null, ["loc", [null, [8, 6], [10, 13]]]], ["block", "if", [["get", "model.component.settings.isSdgIndexMap", ["loc", [null, [15, 8], [15, 46]]]]], [], 1, 2, ["loc", [null, [15, 2], [19, 9]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
efineday('sdg-dash/components/markdown-card/component', ['exports', 'ember-cli-opendata-pages/components/markdown-card/component'], function (exports, _emberCliOpendataPagesComponentsMarkdownCardComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsMarkdownCardComponent['default'];
    }
  });
});
efineday('sdg-dash/components/no-data-card/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/no-data-card/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": false,
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 43,
            "column": 6
          }
        },
        "moduleName": "sdg-dash/components/no-data-card/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        dom.setAttribute(el2, "class", "text-center");
        var el3 = dom.createElement("strong");
        var el4 = dom.createTextNode("No data found");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("hr");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "well");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-6");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-6");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        dom.setAttribute(el5, "class", "no-marg-top");
        var el6 = dom.createTextNode("How to Contribute");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("hr");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("dl");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("dt");
        var el7 = dom.createTextNode("Services");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("dd");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createTextNode("GeoJSON");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createTextNode("WMS, WMTS, KML, GeoRSS");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createTextNode("Feature, Map, Image");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createTextNode("more ..");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("            \n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("dt");
        var el7 = dom.createTextNode("Files");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("dd");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createTextNode("GeoJSON file (.geojson, .json)");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createTextNode("Comma-separated values (CSV) collection (.zip)");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createTextNode("Comma-separated values (CSV) file (.csv)");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createElement("a");
        dom.setAttribute(el9, "href", "https://doc.arcgis.com/en/arcgis-online/share-maps/supported-items.htm");
        dom.setAttribute(el9, "target", "_blank");
        var el10 = dom.createTextNode("more..");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("dt");
        var el7 = dom.createTextNode("Story Maps");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("dd");
        var el7 = dom.createElement("a");
        dom.setAttribute(el7, "href", "http://storymaps.arcgis.com/en/");
        dom.setAttribute(el7, "target", "_blank");
        var el8 = dom.createTextNode("Engage and Inspire Your Audience");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("hr");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        \n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        \n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode(" \n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 7, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]), 9, 9);
        return morphs;
      },
      statements: [["inline", "arcgis-map", [], ["no_data", true], ["loc", [null, [8, 8], [8, 35]]]], ["content", "login-button", ["loc", [null, [38, 8], [38, 24]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('sdg-dash/components/placeholder-card/component', ['exports', 'ember-cli-opendata-pages/components/placeholder-card/component'], function (exports, _emberCliOpendataPagesComponentsPlaceholderCardComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliOpendataPagesComponentsPlaceholderCardComponent['default'];
    }
  });
});
efineday('sdg-dash/components/ranking-bar/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/ranking-bar/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "sdg-dash/components/ranking-bar/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('sdg-dash/components/ranking-card/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/ranking-card/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 6
            },
            "end": {
              "line": 10,
              "column": 6
            }
          },
          "moduleName": "sdg-dash/components/ranking-card/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "data-info-popover", [], ["model", ["subexpr", "@mut", [["get", "model.component.settings.data_info", ["loc", [null, [9, 34], [9, 68]]]]], [], []]], ["loc", [null, [9, 8], [9, 70]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 0
          }
        },
        "moduleName": "sdg-dash/components/ranking-card/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "panel panel-default");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "panel-heading");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "pull-left");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "text-muted");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "pull-right");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "clearfix");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "panel-body no-padding");
        var el3 = dom.createTextNode("\n     ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element2, [1]), 0, 0);
        morphs[1] = dom.createMorphAt(element2, 3, 3);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
        return morphs;
      },
      statements: [["content", "model.component.settings.indicator_id", ["loc", [null, [4, 31], [4, 72]]]], ["content", "model.component.settings.title", ["loc", [null, [5, 6], [5, 40]]]], ["block", "if", [["get", "model.component.settings.data_info", ["loc", [null, [8, 12], [8, 46]]]]], [], 0, null, ["loc", [null, [8, 6], [10, 13]]]], ["inline", "ranking-component", [], ["component", ["subexpr", "@mut", [["get", "model.component", ["loc", [null, [15, 35], [15, 50]]]]], [], []], "model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [15, 57], [15, 62]]]]], [], []]], ["loc", [null, [15, 5], [15, 64]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
efineday('sdg-dash/components/ranking-component/component', ['exports', 'ember', 'esri/tasks/QueryTask', 'esri/tasks/query'], function (exports, _ember, _esriTasksQueryTask, _esriTasksQuery) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['ranking-view'],

    queryHandle: null,

    didInsertElement: function didInsertElement() {
      this._super.apply(this, arguments);

      var comp = this.get('component');
      var settings = comp.settings;
      this.set('settings', settings);

      this._fetchData(settings);
    },

    _fetchData: function _fetchData(settings) {
      var task = new _esriTasksQueryTask['default'](settings.url);

      var query = new _esriTasksQuery['default']();
      query.where = settings.query.where;
      query.outFields = settings.query.outFields;
      query.orderByFields = settings.query.orderByFields;

      var qH = task.execute(query, this._handleQueryResponse.bind(this), this._handleQueryError.bind(this));
      this.set('queryHandle', qH);
    },

    _handleQueryResponse: function _handleQueryResponse(response) {
      var _this = this;

      if (response.features.length > 0) {
        (function () {
          var features = response.features;
          var settings = _this.get('settings');

          var highlight = settings.highlight_value;
          var highlight_field = settings.highlight_field;
          var highlight_padding = settings.highlight_padding;
          var value_field = settings.value_field;

          // let row;
          var i = 1;
          var foundIndex = null;
          for (i; i < features.length; i++) {
            if (features[i].attributes[highlight_field] === highlight) {
              foundIndex = i;
            }
          }

          var rows = [];
          if (_ember['default'].isNone(foundIndex)) {
            // do nothing
          } else if (foundIndex === 0) {
              // first
              rows.push({ ranking: 1, is_highlighted: true, label: features[0].attributes[highlight_field], value: features[0].attributes[value_field] });

              i = 1;
              for (i; i <= highlight_padding; i++) {
                rows.push({ ranking: i, label: features[i].attributes[highlight_field], value: features[i].attributes[value_field] });
              }

              // last
              rows.push({ ranking: features.length, label: features[features.length - 1].attributes[highlight_field], value: features[features.length - 1].attributes[value_field] });
            } else if (foundIndex === features.length - 1) {
              // last
              rows.push({ ranking: 1, label: features[0].attributes[highlight_field], value: features[0].attributes[value_field] });

              var start_index = foundIndex - highlight_padding;
              for (start_index; start_index < foundIndex; start_index++) {
                rows.push({ ranking: start_index, label: features[start_index].attributes[highlight_field], value: features[start_index].attributes[value_field] });
              }

              rows.push({ ranking: foundIndex, is_highlighted: true, label: features[foundIndex].attributes[highlight_field], value: features[foundIndex].attributes[value_field] });
            } else {
              // somewhere in between
              rows.push({ ranking: 1, label: features[0].attributes[highlight_field], value: features[0].attributes[value_field] });

              var ahead_start = foundIndex - settings.highlight_padding;
              for (ahead_start; ahead_start < foundIndex; ahead_start++) {
                rows.push({ ranking: ahead_start, label: features[ahead_start].attributes[highlight_field], value: features[ahead_start].attributes[value_field] });
              }

              rows.push({ ranking: foundIndex, is_highlighted: true, label: features[foundIndex].attributes[highlight_field], value: features[foundIndex].attributes[value_field] });

              var behind_end = foundIndex + settings.highlight_padding;
              foundIndex += 1;
              for (foundIndex; foundIndex <= behind_end; foundIndex++) {
                rows.push({ ranking: foundIndex, label: features[foundIndex].attributes[highlight_field], value: features[foundIndex].attributes[value_field] });
              }

              rows.push({ ranking: features.length, label: features[features.length - 1].attributes[highlight_field], value: features[features.length - 1].attributes[value_field] });
            }

          // get normalized bar values
          var values = rows.map(function (row) {
            return row.value;
          });

          var normalized_values = _this._normalizeBarValues(_ember['default'].copy(values));
          var color_hex = _this.get('session').get('selected_sdg').get('colorHex');
          rows.forEach(function (row, i) {
            var in_string = 'width:' + normalized_values[i] + '%;background-color:' + color_hex + ';';
            var safeString = new _ember['default'].Handlebars.SafeString(in_string);
            row.barRankStyle = safeString;
          }, _this);

          _this.set('rows', rows);
        })();
      }
    },

    // from : http://stackoverflow.com/questions/13368046/how-to-normalize-a-list-of-positive-numbers-in-javascript
    // http://jsfiddle.net/XpRR8/4/
    _normalizeBarValues: function _normalizeBarValues(numbers) {
      var ratio = 0,
          i = numbers.length;

      while (i--) {
        numbers[i] > ratio && (ratio = numbers[i]);
      }

      ratio /= 100;
      i = numbers.length;

      while (i--) {
        numbers[i] = numbers[i] / ratio;
      }
      return numbers;
    },

    _handleQueryError: function _handleQueryError(error) {
      console.log('error querying for ranking card component', error);
    },

    willDestroyElement: function willDestroyElement() {
      var qH = this.get('queryHandle');
      if (qH) {
        qH.cancel();
      }
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/ranking-component/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 4
            },
            "end": {
              "line": 12,
              "column": 4
            }
          },
          "moduleName": "sdg-dash/components/ranking-component/template.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "class", "ranking-rank");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "class", "ranking-label-col");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment(" <td>{{row.value}}</td> ");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          dom.setAttribute(el2, "class", "bar-ranking");
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "bar-rank");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [7, 1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
          morphs[3] = dom.createAttrMorph(element1, 'style');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["subexpr", "if", [["get", "row.is_highlighted", ["loc", [null, [4, 22], [4, 40]]]], "ranking-view-highlighted", "ranking-view-highlighted-td"], [], ["loc", [null, [4, 17], [4, 99]]]]]]], ["content", "row.ranking", ["loc", [null, [5, 33], [5, 48]]]], ["content", "row.label", ["loc", [null, [6, 38], [6, 51]]]], ["attribute", "style", ["get", "row.barRankStyle", ["loc", [null, [9, 40], [9, 56]]]]]],
        locals: ["row", "index"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 8
          }
        },
        "moduleName": "sdg-dash/components/ranking-component/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("table");
        dom.setAttribute(el1, "class", "table table-condensed ranking-table");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "rows", ["loc", [null, [3, 12], [3, 16]]]]], [], 0, null, ["loc", [null, [3, 4], [12, 13]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
efineday('sdg-dash/components/sdg-overview-collage/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    i18n: _ember['default'].inject.service(),

    // currentLocale: Ember.computed('i18n', function () {
    //   return this.get('i18n').locale;
    // }), 

    currentLocale: 'en',

    currentLocaleObserver: _ember['default'].observer('i18n.locale', function () {
      this.set('currentLocale', this.get('i18n').locale);
    }),

    actions: {
      loadSDG: function loadSDG(goal) {
        this.sendAction('loadSDG', goal);
      }
    },

    didInitAttrs: function didInitAttrs() {
      // initialize service for locale binding in template
      this.get('i18n');
      console.log('init!');
    },

    didInsertElement: function didInsertElement() {

      this.initCollage();

      this.resizeTimer = null;
      _ember['default'].$(window).bind('resize', (function () {
        _ember['default'].$('.collage img').css("opacity", 0);
        if (this.resizeTimer) {
          clearTimeout(this.resizeTimer);
        }
        this.resizeTimer = setTimeout(this.initCollage, 200);
      }).bind(this));
    },

    willDestroyElement: function willDestroyElement() {
      console.log('destroy!');
    },

    initCollage: function initCollage() {
      console.log('collage-ing');
      _ember['default'].$('.collage').removeWhitespace().collagePlus({
        'effect': 'effect-2',
        'targetHeight': 150,
        'allowPartialLastRow': true
      });

      _ember['default'].$('.img-sm').css('opacity', 1);
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/sdg-overview-collage/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 6
            },
            "end": {
              "line": 6,
              "column": 6
            }
          },
          "moduleName": "sdg-dash/components/sdg-overview-collage/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "height", "150");
          dom.setAttribute(el1, "width", "150");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'src');
          morphs[1] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["attribute", "src", ["concat", ["images/sdg/", ["get", "i18n.locale", ["loc", [null, [5, 57], [5, 68]]]], "/TGG_Icon_Color_", ["get", "goal.displayNumber", ["loc", [null, [5, 88], [5, 106]]]], ".png"]]], ["element", "action", ["loadSDG", ["get", "goal", ["loc", [null, [5, 32], [5, 36]]]]], [], ["loc", [null, [5, 13], [5, 38]]]]],
        locals: ["goal"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 6
          }
        },
        "moduleName": "sdg-dash/components/sdg-overview-collage/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "sdg-dash");
        dom.setAttribute(el1, "class", "container marg-bottom-50");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "collage");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("      \n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("img");
        dom.setAttribute(el4, "src", "images/sdg/TGG_Icon_Color_18.png");
        dom.setAttribute(el4, "height", "150");
        dom.setAttribute(el4, "width", "150");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [4, 14], [4, 19]]]]], [], 0, null, ["loc", [null, [4, 6], [6, 15]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
efineday('sdg-dash/components/sdg-select-box/component', ['exports', 'ember', 'ic-ajax', 'sdg-dash/config/environment', 'sdg-dash/utils/colors', 'npm:js-cookie'], function (exports, _ember, _icAjax, _sdgDashConfigEnvironment, _sdgDashUtilsColors, _npmJsCookie) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['btn'],

    // i18n: Ember.inject.service(),

    fetchGoals: function fetchGoals(locale) {
      return (0, _icAjax['default'])({
        url: _sdgDashConfigEnvironment['default'].sdgApi + 'goals',
        data: {
          locale: locale
        },
        dataType: 'json'
      });
    },

    addDropDownItems: function addDropDownItems(response) {
      response.data.forEach((function (goal) {
        var short_name = goal.short;
        this.$(this.get('elId')).append('<option value="' + goal.goal + '">SDG ' + goal.goal.toString() + ': ' + short_name + '</option>');
      }).bind(this));

      return _ember['default'].RSVP.Promise.resolve();
    },

    didInsertElement: function didInsertElement() {
      this.set('elId', '#sdg-selector');

      var locale = _npmJsCookie['default'].get('current_locale');
      if (!locale) {
        locale = this.get('i18n.locale');
      }

      this.fetchGoals(locale).then(this.addDropDownItems.bind(this)).then((function () {

        // initialize the selectpicker plugin
        this.$(this.get('elId')).selectpicker({
          style: 'btn-default',
          liveSearch: false,
          selectOnTab: true,
          size: 'auto',
          width: '175px'
        });

        // wire up change event
        this.$(this.get('elId')).change((function () {
          var selected = this.$(this.get('elId')).val();
          this._changeDisplayName();
          this.get('changeSdg')(selected);
        }).bind(this));

        var goal = this.get('container').lookup('router:main').router.state.params.sdg.goal_id;
        this.$(this.get('elId')).selectpicker('val', goal);
        this._changeDisplayName();

        this._reTheme();
      }).bind(this));
    },

    i18nChanged: _ember['default'].observer('i18n.locale', function () {
      var locale = this.get('i18n.locale');
      console.log('locale is now', locale);

      this.$(this.get('elId')).empty();

      this.fetchGoals(locale).then(this.addDropDownItems.bind(this)).then((function () {
        this.$(this.get('elId')).selectpicker('refresh');
      }).bind(this));
    }),

    sessionRouteChanged: _ember['default'].observer('session.selected_sdg', function () {
      // const id = this.get('session').get('selected_sdg').get('id');
      // this.$(this.get('elId')).selectpicker('val', id);
      // this._changeDisplayName();

      // this.updateSDGi18nText(id);
      this._clearCustomClasses();
      this._reTheme();
    }),

    updateSDGi18nText: function updateSDGi18nText(goal_number) {
      var svc = this.get('i18n');
      var goal_locale = svc.t('application.goal_info.goal');
      var title = svc.t('application.goal_info.goals.' + goal_number + '.title');
      var description = svc.t('application.goal_info.goals.' + goal_number + '.description');

      var ses = this.get('session');
      ses.setProperties({
        goalLocale: goal_locale,
        titleLocale: title,
        descriptionLocale: description
      });
    },

    _clearCustomClasses: function _clearCustomClasses() {
      this.$('.btn').removeClass().addClass('btn dropdown-toggle btn-default');
    },

    _reTheme: function _reTheme() {
      var dark_color = this.get('session').get('selected_sdg').get('colorHex');
      var light_color = _sdgDashUtilsColors['default'].shadeColor(dark_color, 0.75);
      console.log('light color', light_color, 'dark_color', dark_color);

      this.$('.btn').css('color', dark_color);
      this.$('.btn').css('border-color', dark_color);

      var elId = '#sdg-selector';
      var holderEl = null;
      this.$(elId).on('show.bs.select', (function () {
        holderEl = this.$('.dropdown-menu .inner li.selected a').css('background-color', dark_color).css('color', 'white');
      }).bind(this));
      this.$(elId).on('hide.bs.select', (function () {
        holderEl.css('background-color', 'white').css('color', '#4C4C4C');
      }).bind(this));

      var sdg_id = this.get('session').get('selected_sdg').get('id');
      var current_sdg_class = 'btn-sdg-' + sdg_id;
      this.set('current_sdg_class', current_sdg_class);
    },

    mouseEnter: function mouseEnter() {
      this.$('.btn').removeClass('btn-default').addClass(this.get('current_sdg_class'));
    },
    mouseLeave: function mouseLeave() {
      this.$('.btn').removeClass(this.get('current_sdg_class')).addClass('btn-default');
    },

    _changeDisplayName: function _changeDisplayName() {
      var elId = '#sdg-selector';
      var el = this.$(elId)[0];
      var btn_text = el.options[el.selectedIndex].text.split(':')[0].trim();
      this.$(elId).siblings('.btn').text(btn_text);
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/sdg-select-box/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 9
          }
        },
        "moduleName": "sdg-dash/components/sdg-select-box/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("select");
        dom.setAttribute(el1, "id", "sdg-selector");
        dom.setAttribute(el1, "class", "selectpicker");
        dom.setAttribute(el1, "data-live-search", "true");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
efineday('sdg-dash/components/storymap-card/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    didInsertElement: function didInsertElement() {
      this.$('#sm-carousel').carousel({
        interval: 8000,
        pause: ''
      });

      var url = this.get('model.component.settings.url');
      this.$('#sm-carousel').on('click', function () {
        window.open(url);
      });

      var class_names = this.get('model.component.class_names');
      if (class_names) {
        this.$(this.element).addClass(class_names);
      }
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/storymap-card/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 6
            },
            "end": {
              "line": 9,
              "column": 6
            }
          },
          "moduleName": "sdg-dash/components/storymap-card/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "data-info-popover", [], ["model", ["subexpr", "@mut", [["get", "model.component.settings.data_info", ["loc", [null, [8, 34], [8, 68]]]]], [], []]], ["loc", [null, [8, 8], [8, 70]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 8
            },
            "end": {
              "line": 25,
              "column": 8
            }
          },
          "moduleName": "sdg-dash/components/storymap-card/template.hbs"
        },
        isEmpty: false,
        arity: 2,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment(" <a href=\"{{model.component.settings.url}}\" class=\"thumbnail\" target=\"_blank\"> ");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n              ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "alt", "thumbnail");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment(" </a> ");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [3]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'src');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["item ", ["subexpr", "if", [["get", "thumbnail.first_active", ["loc", [null, [20, 32], [20, 54]]]], "active"], [], ["loc", [null, [20, 27], [20, 66]]]]]]], ["attribute", "src", ["concat", [["get", "thumbnail.url", ["loc", [null, [22, 26], [22, 39]]]]]]]],
        locals: ["thumbnail", "index"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 30,
            "column": 6
          }
        },
        "moduleName": "sdg-dash/components/storymap-card/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "panel panel-default");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "panel-heading");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "pull-left");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "pull-right");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "clearfix");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "panel-body no-padding");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" carousel ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "id", "carousel-example-generic");
        dom.setAttribute(el3, "class", "carousel slide carousel-fade");
        dom.setAttribute(el3, "data-ride", "carousel");
        dom.setAttribute(el3, "id", "sm-carousel");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" Wrapper for slides ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "carousel-inner");
        dom.setAttribute(el4, "role", "listbox");
        var el5 = dom.createTextNode("\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("        \n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [0]);
        var element3 = dom.childAt(element2, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element3, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element3, [3]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [3, 3, 3]), 1, 1);
        return morphs;
      },
      statements: [["content", "model.component.settings.title", ["loc", [null, [4, 4], [4, 38]]]], ["block", "if", [["get", "model.component.settings.data_info", ["loc", [null, [7, 12], [7, 46]]]]], [], 0, null, ["loc", [null, [7, 6], [9, 13]]]], ["block", "each", [["get", "model.component.settings.thumbnails", ["loc", [null, [19, 16], [19, 51]]]]], [], 1, null, ["loc", [null, [19, 8], [25, 17]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
efineday('sdg-dash/components/summary-stat-card/component', ['exports', 'ember', 'ic-ajax'], function (exports, _ember, _icAjax) {
  exports['default'] = _ember['default'].Component.extend({

    didInsertElement: function didInsertElement() {
      var settings = this.get('model.component.settings');
      if (!settings.query) {
        console.log('no query found for summary-stat-card; exiting ..');
        return;
      }
      this.set('settings', settings);

      // let class_names = this.get('model.component.class_names');
      // if (class_names) {
      //   Ember.$(this.element + ' .stat-value').addClass(class_names);
      // }

      this._fetchData();
    },

    _fetchData: function _fetchData() {
      var settings = this.get('settings');
      var stats = settings.query.outStatistics;

      var data = {};
      data.f = 'json';

      data.outStatistics = JSON.stringify(stats);

      (0, _icAjax['default'])({
        url: settings.url + '/query',
        data: data,
        dataType: 'json'
      }).then(this._handleQueryResponse.bind(this))['catch'](this._handleQueryError.bind(this));
    },

    _formatAsNumber: function _formatAsNumber(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    _handleQueryResponse: function _handleQueryResponse(response) {
      if (response.features.length > 0) {
        var settings = this.get('settings');
        var feature = response.features[0];
        var field_name = settings.query.outStatistics[0].outStatisticFieldName;
        var stat_value = feature.attributes[field_name];

        if (isNaN(stat_value)) {
          stat_value = parseFloat(stat_value);
        }

        if (settings.display_format) {
          if (!_ember['default'].isNone(settings.display_format.decimal_places)) {
            stat_value = this._formatAsNumber(stat_value.toFixed(settings.display_format.decimal_places));
          }

          if (settings.display_format.suffix) {
            this.set('stat_suffix', _ember['default'].String.htmlSafe(settings.display_format.suffix));
          }
        }

        this.set('stat_value', stat_value);
      }
    },

    _handleQueryError: function _handleQueryError(error) {
      console.log('error querying for summary stat', error);
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/summary-stat-card/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 6
            },
            "end": {
              "line": 9,
              "column": 6
            }
          },
          "moduleName": "sdg-dash/components/summary-stat-card/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "data-info-popover", [], ["model", ["subexpr", "@mut", [["get", "model.component.settings.data_info", ["loc", [null, [8, 34], [8, 68]]]]], [], []]], ["loc", [null, [8, 8], [8, 70]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 6
          }
        },
        "moduleName": "sdg-dash/components/summary-stat-card/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "panel panel-default");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "panel-heading");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "pull-left");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "pull-right");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "clearfix");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "panel-body text-center");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "stat-suffix");
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element0, [3, 1]);
        var element3 = dom.childAt(element2, [1]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[2] = dom.createAttrMorph(element3, 'class');
        morphs[3] = dom.createMorphAt(element3, 0, 0);
        morphs[4] = dom.createMorphAt(dom.childAt(element2, [3]), 0, 0);
        return morphs;
      },
      statements: [["content", "model.component.settings.title", ["loc", [null, [4, 4], [4, 38]]]], ["block", "if", [["get", "model.component.settings.data_info", ["loc", [null, [7, 12], [7, 46]]]]], [], 0, null, ["loc", [null, [7, 6], [9, 13]]]], ["attribute", "class", ["concat", ["stat-value ", ["subexpr", "if", [["get", "model.component.class_names", ["loc", [null, [15, 35], [15, 62]]]], ["get", "model.component.class_names", ["loc", [null, [15, 63], [15, 90]]]], ""], [], ["loc", [null, [15, 30], [15, 95]]]], " "]]], ["content", "stat_value", ["loc", [null, [15, 98], [15, 112]]]], ["content", "stat_suffix", ["loc", [null, [15, 146], [15, 161]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
efineday('sdg-dash/components/target-select-box/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    didInsertElement: function didInsertElement() {
      _ember['default'].$('.target-selectpicker').selectpicker({
        style: 'btn-default',
        selectOnTab: true,
        size: 8
      });

      var selector = '#' + this.elementId + ' .btn-group.bootstrap-select';
      // Ember.$(selector).addClass('btn-block');
      _ember['default'].$(selector).addClass('target-sel-override');
      // Ember.$(selector).css('width', '');
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/target-select-box/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 2
            }
          },
          "moduleName": "sdg-dash/components/target-select-box/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          dom.setAttribute(el1, "value", "");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "target.title", ["loc", [null, [3, 21], [3, 39]]]]],
        locals: ["target"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 10
          }
        },
        "moduleName": "sdg-dash/components/target-select-box/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("select");
        dom.setAttribute(el1, "id", "target-selector-box");
        dom.setAttribute(el1, "class", "target-selectpicker");
        dom.setAttribute(el1, "data-live-search", "true");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" <div class=\"dropdown dd-sel clearfix\">\n  <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n    Select a Target\n  <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n{{#each model.targets as |target| }}\n        <li>\n          <a href=\"#\">{{ target.title }}</a>\n        </li>\n      {{/each}}  </ul>\n</div> ");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model.targets", ["loc", [null, [2, 10], [2, 23]]]]], [], 0, null, ["loc", [null, [2, 2], [4, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
efineday('sdg-dash/components/targets-select-button/component', ['exports', 'ember', 'sdg-dash/utils/colors'], function (exports, _ember, _sdgDashUtilsColors) {
  exports['default'] = _ember['default'].Component.extend({
    classNames: ['btn btn-nocursor'],

    didInsertElement: function didInsertElement() {
      this._reTheme();
    },

    sessionRouteChanged: _ember['default'].observer('session.selected_sdg', function () {
      this._reTheme();
    }),

    _reTheme: function _reTheme() {
      var dark_color = this.get('session').get('selected_sdg').get('colorHex');
      var light_color = _sdgDashUtilsColors['default'].shadeColor(dark_color, 0.75);
      console.log('light color', light_color, 'dark_color', dark_color);

      this.$('.btn').css('color', dark_color);
      this.$('.btn').css('border-color', dark_color);

      var elId = '#sdg-selector';
      var holderEl = null;
      this.$(elId).on('show.bs.select', (function () {
        holderEl = this.$('.dropdown-menu .inner li.selected.active a').css('background-color', dark_color);
      }).bind(this));
      this.$(elId).on('hide.bs.select', (function () {
        holderEl.css('background-color', 'white');
      }).bind(this));

      var sdg_id = this.get('session').get('selected_sdg').get('id');
      var current_sdg_class = 'btn-sdg-' + sdg_id;
      this.set('current_sdg_class', current_sdg_class);
    },

    mouseEnter: function mouseEnter() {
      this.$('.btn').removeClass('btn-default').addClass(this.get('current_sdg_class'));
    },
    mouseLeave: function mouseLeave() {
      this.$('.btn').removeClass(this.get('current_sdg_class')).addClass('btn-default');
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/targets-select-button/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 112
          }
        },
        "moduleName": "sdg-dash/components/targets-select-button/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "class", "btn btn-default");
        dom.setAttribute(el1, "data-toggle", "modal");
        dom.setAttribute(el1, "data-target", "#myModal");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 0, 0);
        return morphs;
      },
      statements: [["content", "model.selected_target.id", ["loc", [null, [1, 75], [1, 103]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday("sdg-dash/components/targets-select-modal/component", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    target: null,

    display_data: [],

    breadcrumbs: [],

    metadata_field_aliases: {
      goal: "Goal",
      goal_meta_link: "Link to UN Stats Metadata Compilation Report in PDF format",
      goal_meta_link_page: "Page Number to link directly to Indicator within PDF",
      target_id: "Target ID",
      target: "Target Description",
      indicator_id: "Indicator ID",
      indicator: "Indicator Description",
      has_metadata: "Is Metadata from the UN Stats report available",
      definition: "Precise Definition of the Indicator",
      method: "Method of Computation and/or Estimation",
      rationale_interpretation: "Rationale and/or Interpretation",
      domain: "Domain",
      subdomain: "Subdomain",
      target_linkage: "How is the indicator linked to the specific TARGET as worded in the OWG Report?",
      exists_reported: "Does the indicator already exist and is it regularly reported?",
      reliability_coverage_comparability_subnational_compute: "Comment on the reliability, potential coverage, comparability across countries, and the possibility to compute the indicator at sub-national level",
      baseline_value_2015: "Is there already a baseline value for 2015?",
      sources_data_collection: "Sources and Data Collection",
      quantifiable_derivatives: "Quantifiable Derivatives",
      frequency: "Frequency of Data Collection",
      disaggregation: "Data Disaggregation",
      global_regional_monitoring_data: "Entity Responsible for Data for Global and Regional Monitoring",
      comments_limitations: "Comments and Limitations",
      gender_equality_issues: "Identifiable Gender Equality Issues",
      responsible_entities: "Responsible Entities",
      current_data_availability: "Current Data Availability",
      related_targets: "Related Targets",
      related_indicators: "Related Indicators",
      supplementary_information: "Supplementary Information",
      references: "References"
    },

    skip_fields_for_display: ['goal', 'goal_meta_link', 'goal_meta_link_page', 'has_metadata', 'target', 'target_id', 'indicator', 'indicator_id'],

    actions: {
      setDashboardTarget: function setDashboardTarget(target) {
        this.$('#myModal').one('hidden.bs.modal', this.modalDidHide.bind(this));
        this.set('target', target);
        this.$('#myModal').modal('hide');
      },

      setToSdgIndex: function setToSdgIndex() {
        this.$('#myModal').one('hidden.bs.modal', this.modalDidHide.bind(this));
        this.set('target', { id: 'SDG Index' });
        this.$('#myModal').modal('hide');
      },

      loadIndicatorSheet: function loadIndicatorSheet(target) {
        var _this = this;

        // this.set('breadcrumbs', [ { title: target.id } ]);

        var svc = this.get('session');
        svc.getIndicatorsForTarget(target.id, true).then(function (response) {
          console.log(response);

          _this.$('.targ-sep, .targ-display').fadeIn();

          svc.set('target_display', target.id);

          svc.set('current_indicators', response.data);

          _this.$('.target-sheet').fadeOut().promise().done((function () {
            this.$('.target-indicator-sheet').fadeIn();
          }).bind(_this));
        })["catch"](function (error) {
          console.log(error);
        });
      },

      loadMetadata: function loadMetadata(indicator) {
        var svc = this.get('session');
        svc.getMetadata(indicator.indicator_id).then((function (response) {
          console.log(response);

          this.$('.ind-sep, .ind-display').fadeIn();

          svc.set('indicator_display', indicator.indicator_id);
          svc.set('indicator_display_text', indicator.indicator);
          var indicator_direct_link = indicator.goal_meta_link + "#page=" + indicator.goal_meta_link_page;
          svc.set('indicator_direct_link', indicator_direct_link);

          this.showMetadata(response.data[0]);
        }).bind(this))["catch"](function (error) {
          console.log(error);
        });
      },

      backToTargets: function backToTargets() {
        this.$('.target-indicator-sheet').fadeOut().promise().done((function () {
          this.$('.targ-sep, .targ-display').fadeOut();
          this.$('.target-sheet').fadeIn();
        }).bind(this));
      },

      backToIndicators: function backToIndicators() {
        this.$('.metadata-sheet').fadeOut().promise().done((function () {
          this.$('.ind-sep, .ind-display').fadeOut();
          this.$('.target-indicator-sheet').fadeIn();
        }).bind(this));
      }
    },

    didInsertElement: function didInsertElement() {
      this.set('breadcrumbs', []);
      this.set('display_data', []);

      this.$('#myModal').on('hide.bs.modal', (function () {
        // reset targets & indicators displays
        this.$('.ind-sep, .ind-display, .targ-sep, .targ-display').hide();
        this.$('.target-indicator-sheet, .metadata-sheet').hide();
        this.$('.target-sheet').show();
      }).bind(this));
    },

    showMetadata: function showMetadata(metadata) {

      var svc = this.get('session');

      var metadata_display = [];
      svc.set('metadata_display', metadata_display);

      var field_aliases = this.get('metadata_field_aliases');
      var skip_fields = this.get('skip_fields_for_display');
      var header = '';
      var text = '';
      for (var field in metadata) {
        if (skip_fields.indexOf(field) !== -1 || metadata[field] === '') {
          continue;
        }
        header = field_aliases[field];
        if (field === 'responsible_entities') {
          text = metadata[field].join(', ');
        } else {
          text = new _ember["default"].Handlebars.SafeString(metadata[field].replace(/\\n/g, '<br><br>').replace(/\\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;'));
        }

        var title = metadata['indicator'];
        metadata_display.push({
          title: title,
          header: header,
          text: text
        });
      }

      svc.set('metadata_display', metadata_display);

      this.$('.target-indicator-sheet').fadeOut().promise().done((function () {
        this.$('.metadata-sheet').fadeIn();
      }).bind(this));
    },

    modalDidHide: function modalDidHide(e) {
      var sel = this.get('target');
      this.get('session').set('selected_target', sel.id);
      this.get('session').set('selected_target_description', sel.title);
      this.sendAction('changeTarget', sel);
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/components/targets-select-modal/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 34,
              "column": 8
            },
            "end": {
              "line": 50,
              "column": 8
            }
          },
          "moduleName": "sdg-dash/components/targets-select-modal/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-xs-1 target-display");
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h5");
          dom.setAttribute(el3, "class", "target-id");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "clearfix");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-xs-11 target-display pad-bottom-20");
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "target-desc pad-bottom-10");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "class", "btn btn-default btn-sm");
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("span");
          dom.setAttribute(el4, "class", "glyphicon glyphicon-dashboard");
          dom.setAttribute(el4, "aria-hidden", "true");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" Set to Dashboard\n              ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "class", "btn btn-default btn-sm");
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("span");
          dom.setAttribute(el4, "class", "glyphicon glyphicon-flag");
          dom.setAttribute(el4, "aria-hidden", "true");
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode(" View Indicators\n              ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element5 = dom.childAt(fragment, [1]);
          var element6 = dom.childAt(element5, [3]);
          var element7 = dom.childAt(element6, [3]);
          var element8 = dom.childAt(element6, [5]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(dom.childAt(element5, [1, 1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element6, [1]), 0, 0);
          morphs[2] = dom.createElementMorph(element7);
          morphs[3] = dom.createElementMorph(element8);
          return morphs;
        },
        statements: [["content", "target.id", ["loc", [null, [37, 36], [37, 49]]]], ["content", "target.title", ["loc", [null, [41, 53], [41, 69]]]], ["element", "action", ["setDashboardTarget", ["get", "target", ["loc", [null, [42, 52], [42, 58]]]]], [], ["loc", [null, [42, 22], [42, 60]]]], ["element", "action", ["loadIndicatorSheet", ["get", "target", ["loc", [null, [45, 52], [45, 58]]]]], [], ["loc", [null, [45, 22], [45, 60]]]]],
        locals: ["target"],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 67,
                "column": 14
              },
              "end": {
                "line": 71,
                "column": 14
              }
            },
            "moduleName": "sdg-dash/components/targets-select-modal/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "class", "btn btn-default btn-sm");
            var el2 = dom.createTextNode("\n                  ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2, "class", "glyphicon glyphicon-list-alt");
            dom.setAttribute(el2, "aria-hidden", "true");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" View Metadata\n                ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element2);
            return morphs;
          },
          statements: [["element", "action", ["loadMetadata", ["get", "indicator", ["loc", [null, [68, 48], [68, 57]]]]], [], ["loc", [null, [68, 24], [68, 59]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 71,
                "column": 14
              },
              "end": {
                "line": 76,
                "column": 14
              }
            },
            "moduleName": "sdg-dash/components/targets-select-modal/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "class", "btn btn-default btn-sm disabled");
            var el2 = dom.createTextNode("\n                  ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2, "class", "glyphicon glyphicon-list-alt");
            dom.setAttribute(el2, "aria-hidden", "true");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" No Metadata Available\n                ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("a");
            dom.setAttribute(el1, "target", "_blank");
            var el2 = dom.createTextNode(" View Report ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [3]);
            var morphs = new Array(1);
            morphs[0] = dom.createAttrMorph(element1, 'href');
            return morphs;
          },
          statements: [["attribute", "href", ["concat", [["get", "indicator.goal_meta_link", ["loc", [null, [75, 27], [75, 51]]]], "#page=", ["get", "indicator.goal_meta_link_page", ["loc", [null, [75, 61], [75, 90]]]]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 59,
              "column": 8
            },
            "end": {
              "line": 79,
              "column": 8
            }
          },
          "moduleName": "sdg-dash/components/targets-select-modal/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-xs-2 indicator-id-display");
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h5");
          dom.setAttribute(el3, "class", "target-id");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "clearfix");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-xs-10 indicator-title-display pad-bottom-20");
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("div");
          dom.setAttribute(el3, "class", "target-desc pad-bottom-10");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element3 = dom.childAt(fragment, [1]);
          var element4 = dom.childAt(element3, [3]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(element3, [1, 1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element4, [1]), 0, 0);
          morphs[2] = dom.createMorphAt(element4, 3, 3);
          return morphs;
        },
        statements: [["content", "indicator.indicator_id", ["loc", [null, [62, 36], [62, 62]]]], ["content", "indicator.indicator", ["loc", [null, [66, 53], [66, 76]]]], ["block", "if", [["get", "indicator.has_metadata", ["loc", [null, [67, 20], [67, 42]]]]], [], 0, 1, ["loc", [null, [67, 14], [76, 21]]]]],
        locals: ["indicator"],
        templates: [child0, child1]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 91,
              "column": 8
            },
            "end": {
              "line": 98,
              "column": 8
            }
          },
          "moduleName": "sdg-dash/components/targets-select-modal/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("          ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h5");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("hr");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [5]), 0, 0);
          return morphs;
        },
        statements: [["content", "item.header", ["loc", [null, [93, 16], [93, 31]]]], ["content", "item.text", ["loc", [null, [95, 15], [95, 28]]]]],
        locals: ["item"],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 106,
            "column": 6
          }
        },
        "moduleName": "sdg-dash/components/targets-select-modal/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "modal fade");
        dom.setAttribute(el1, "id", "myModal");
        dom.setAttribute(el1, "tabindex", "-1");
        dom.setAttribute(el1, "role", "dialog");
        dom.setAttribute(el1, "aria-labelledby", "myModalLabel");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "modal-dialog modal-lg");
        dom.setAttribute(el2, "role", "document");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "modal-content");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "close");
        dom.setAttribute(el5, "data-dismiss", "modal");
        dom.setAttribute(el5, "aria-label", "Close");
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "aria-hidden", "true");
        var el7 = dom.createTextNode("×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h4");
        dom.setAttribute(el5, "class", "modal-title");
        dom.setAttribute(el5, "id", "myModalLabel");
        var el6 = dom.createTextNode("\n          Targets \n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "targ-sep");
        var el7 = dom.createTextNode("/");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "targ-display");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "ind-sep");
        var el7 = dom.createTextNode("/");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "ind-display");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-body modal-body-container target-sheet");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-xs-1 target-display");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment(" <h5 class=\"target-id\">SDG Index</h5> ");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "glyphicon glyphicon-list-alt glyph-sdg-index-modal");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "clearfix");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-xs-11 target-display pad-bottom-20");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "class", "target-desc pad-bottom-10");
        var el8 = dom.createTextNode("SDG Index Score");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("button");
        dom.setAttribute(el7, "class", "btn btn-default btn-sm");
        var el8 = dom.createTextNode("\n              ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8, "class", "glyphicon glyphicon-dashboard");
        dom.setAttribute(el8, "aria-hidden", "true");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" Dashboard\n            ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n           ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("  <button class=\"btn btn-default btn-sm\">\n              <span class=\"glyphicon glyphicon-flag\" aria-hidden=\"true\"></span> Indicators\n            </button>\n            <button class=\"btn btn-default btn-sm\">\n              <span class=\"glyphicon glyphicon-th-list\" aria-hidden=\"true\"></span> Datasets\n            </button> ");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-body modal-body-container target-indicator-sheet");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "btn btn-default btn-sm");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "glyphicon glyphicon glyphicon-menu-left");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" Back\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        dom.setAttribute(el5, "class", "text-center");
        var el6 = dom.createTextNode("Indicators");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-body modal-body-container metadata-sheet");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "btn btn-default btn-sm back-link");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "glyphicon glyphicon glyphicon-menu-left");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode(" Back\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h3");
        dom.setAttribute(el5, "class", "text-center");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h6");
        dom.setAttribute(el5, "class", "text-center");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createTextNode("View Full Report");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-footer");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "btn btn-default");
        dom.setAttribute(el5, "data-dismiss", "modal");
        var el6 = dom.createTextNode("Close");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element9 = dom.childAt(fragment, [0, 1, 1]);
        var element10 = dom.childAt(element9, [1, 3]);
        var element11 = dom.childAt(element9, [3]);
        var element12 = dom.childAt(element11, [1, 3, 3]);
        var element13 = dom.childAt(element9, [5]);
        var element14 = dom.childAt(element13, [1]);
        var element15 = dom.childAt(element9, [7]);
        var element16 = dom.childAt(element15, [1]);
        var element17 = dom.childAt(element15, [5, 1]);
        var morphs = new Array(10);
        morphs[0] = dom.createMorphAt(dom.childAt(element10, [3]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element10, [7]), 0, 0);
        morphs[2] = dom.createElementMorph(element12);
        morphs[3] = dom.createMorphAt(element11, 3, 3);
        morphs[4] = dom.createElementMorph(element14);
        morphs[5] = dom.createMorphAt(element13, 7, 7);
        morphs[6] = dom.createElementMorph(element16);
        morphs[7] = dom.createMorphAt(dom.childAt(element15, [3]), 0, 0);
        morphs[8] = dom.createAttrMorph(element17, 'href');
        morphs[9] = dom.createMorphAt(element15, 9, 9);
        return morphs;
      },
      statements: [["content", "session.target_display", ["loc", [null, [9, 37], [9, 63]]]], ["content", "session.indicator_display", ["loc", [null, [11, 36], [11, 65]]]], ["element", "action", ["setToSdgIndex"], [], ["loc", [null, [23, 20], [23, 46]]]], ["block", "each", [["get", "session.selected_targets", ["loc", [null, [34, 16], [34, 40]]]]], [], 0, null, ["loc", [null, [34, 8], [50, 17]]]], ["element", "action", ["backToTargets"], [], ["loc", [null, [54, 16], [54, 43]]]], ["block", "each", [["get", "session.current_indicators", ["loc", [null, [59, 16], [59, 42]]]]], [], 1, null, ["loc", [null, [59, 8], [79, 17]]]], ["element", "action", ["backToIndicators"], [], ["loc", [null, [83, 16], [83, 46]]]], ["content", "session.indicator_display_text", ["loc", [null, [86, 32], [86, 66]]]], ["attribute", "href", ["concat", [["get", "session.indicator_direct_link", ["loc", [null, [88, 21], [88, 50]]]]]]], ["block", "each", [["get", "session.metadata_display", ["loc", [null, [91, 16], [91, 40]]]]], [], 2, null, ["loc", [null, [91, 8], [98, 17]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
efineday('sdg-dash/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
efineday('sdg-dash/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
efineday('sdg-dash/helpers/eq', ['exports', 'ember'], function (exports, _ember) {

  var eq = function eq(params) {
    return params[0] === params[1];
  };

  exports['default'] = _ember['default'].Helper.helper(eq);
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday('sdg-dash/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
efineday('sdg-dash/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
efineday('sdg-dash/helpers/t', ['exports', 'ember-i18n/helper'], function (exports, _emberI18nHelper) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nHelper['default'];
    }
  });
});
efineday('sdg-dash/home/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/home/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "sdg-dash/home/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [2, 0], [2, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('sdg-dash/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'sdg-dash/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _sdgDashConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_sdgDashConfigEnvironment['default'].APP.name, _sdgDashConfigEnvironment['default'].APP.version)
  };
});
efineday('sdg-dash/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
efineday('sdg-dash/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
efineday("sdg-dash/initializers/ember-i18n", ["exports", "sdg-dash/instance-initializers/ember-i18n"], function (exports, _sdgDashInstanceInitializersEmberI18n) {
  exports["default"] = {
    name: _sdgDashInstanceInitializersEmberI18n["default"].name,

    initialize: function initialize() {
      var application = arguments[1] || arguments[0]; // depending on Ember version
      if (application.instanceInitializer) {
        return;
      }

      _sdgDashInstanceInitializersEmberI18n["default"].initialize(application);
    }
  };
});
efineday('sdg-dash/initializers/export-application-global', ['exports', 'ember', 'sdg-dash/config/environment'], function (exports, _ember, _sdgDashConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_sdgDashConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _sdgDashConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_sdgDashConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
efineday('sdg-dash/initializers/i18n', ['exports'], function (exports) {
  exports.initialize = initialize;

  function initialize(application) {
    application.inject('route', 'i18n', 'service:i18n');
    application.inject('controller', 'i18n', 'service:i18n');
    application.inject('component', 'i18n', 'service:i18n');
  }

  exports['default'] = {
    name: 'i18n',
    initialize: initialize
  };
});
efineday('sdg-dash/initializers/initialize-torii-callback', ['exports', 'torii/redirect-handler'], function (exports, _toriiRedirectHandler) {
  exports['default'] = {
    name: 'torii-callback',
    before: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      application.deferReadiness();
      _toriiRedirectHandler['default'].handle(window)['catch'](function () {
        application.advanceReadiness();
      });
    }
  };
});
efineday('sdg-dash/initializers/initialize-torii-session', ['exports', 'torii/configuration', 'torii/bootstrap/session'], function (exports, _toriiConfiguration, _toriiBootstrapSession) {
  exports['default'] = {
    name: 'torii-session',
    after: 'torii',

    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      if (_toriiConfiguration['default'].sessionServiceName) {
        (0, _toriiBootstrapSession['default'])(application, _toriiConfiguration['default'].sessionServiceName);

        var sessionFactoryName = 'service:' + _toriiConfiguration['default'].sessionServiceName;
        application.inject('adapter', _toriiConfiguration['default'].sessionServiceName, sessionFactoryName);
      }
    }
  };
});
efineday('sdg-dash/initializers/initialize-torii', ['exports', 'torii/bootstrap/torii', 'torii/configuration'], function (exports, _toriiBootstrapTorii, _toriiConfiguration) {

  var initializer = {
    name: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      (0, _toriiBootstrapTorii['default'])(application);
      application.inject('route', 'torii', 'service:torii');
    }
  };

  if (window.DS) {
    initializer.after = 'store';
  }

  exports['default'] = initializer;
});
efineday('sdg-dash/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
efineday("sdg-dash/initializers/liquid-fire", ["exports", "liquid-fire/router-dsl-ext", "liquid-fire/ember-internals"], function (exports, _liquidFireRouterDslExt, _liquidFireEmberInternals) {
  (0, _liquidFireEmberInternals.registerKeywords)();

  exports["default"] = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
});
// This initializer exists only to make sure that the following
// imports happen before the app boots.
efineday('sdg-dash/initializers/session', ['exports'], function (exports) {
  exports.initialize = initialize;
  // Copyright 2016 Esri.
  //
  // Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
  // You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
  //
  // Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
  // "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
  // language governing permissions and limitations under the License.

  function initialize(application) {
    // application.inject('route', 'foo', 'service:foo');
    application.inject('route', 'session', 'service:session');
    application.inject('controller', 'session', 'service:session');
    application.inject('component', 'session', 'service:session');
  }

  exports['default'] = {
    name: 'session',
    initialize: initialize
  };
});
efineday('sdg-dash/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
efineday('sdg-dash/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
efineday("sdg-dash/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
efineday("sdg-dash/instance-initializers/ember-i18n", ["exports", "ember", "ember-i18n/stream", "ember-i18n/legacy-helper", "sdg-dash/config/environment"], function (exports, _ember, _emberI18nStream, _emberI18nLegacyHelper, _sdgDashConfigEnvironment) {
  exports["default"] = {
    name: 'ember-i18n',

    initialize: function initialize(appOrAppInstance) {
      if (_emberI18nLegacyHelper["default"] != null) {
        (function () {
          // Used for Ember < 1.13
          var i18n = appOrAppInstance.container.lookup('service:i18n');

          i18n.localeStream = new _emberI18nStream["default"](function () {
            return i18n.get('locale');
          });

          _ember["default"].addObserver(i18n, 'locale', i18n, function () {
            this.localeStream.value(); // force the stream to be dirty
            this.localeStream.notify();
          });

          _ember["default"].HTMLBars._registerHelper('t', _emberI18nLegacyHelper["default"]);
        })();
      }
    }
  };
});
efineday('sdg-dash/instance-initializers/setup-routes', ['exports', 'torii/configuration', 'torii/bootstrap/routing', 'torii/router-dsl-ext'], function (exports, _toriiConfiguration, _toriiBootstrapRouting, _toriiRouterDslExt) {
  exports['default'] = {
    name: 'torii-setup-routes',
    initialize: function initialize(applicationInstance, registry) {
      if (_toriiConfiguration['default'].sessionServiceName) {
        var router = applicationInstance.get('router');
        var setupRoutes = function setupRoutes() {
          var authenticatedRoutes = router.router.authenticatedRoutes;
          var hasAuthenticatedRoutes = !Ember.isEmpty(authenticatedRoutes);
          if (hasAuthenticatedRoutes) {
            (0, _toriiBootstrapRouting['default'])(applicationInstance, authenticatedRoutes);
          }
          router.off('willTransition', setupRoutes);
        };
        router.on('willTransition', setupRoutes);
      }
    }
  };
});
efineday('sdg-dash/instance-initializers/walk-providers', ['exports', 'torii/configuration', 'torii/lib/container-utils'], function (exports, _toriiConfiguration, _toriiLibContainerUtils) {
  exports['default'] = {
    name: 'torii-walk-providers',
    initialize: function initialize(applicationInstance) {
      // Walk all configured providers and eagerly instantiate
      // them. This gives providers with initialization side effects
      // like facebook-connect a chance to load up assets.
      for (var key in _toriiConfiguration['default'].providers) {
        if (_toriiConfiguration['default'].providers.hasOwnProperty(key)) {
          (0, _toriiLibContainerUtils.lookup)(applicationInstance, 'torii-provider:' + key);
        }
      }
    }
  };
});
efineday('sdg-dash/landing/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    countryName: '',
    stat1: '',
    stat2: '',

    actions: {

      updateCountryName: function updateCountryName(name, stat1, stat2) {
        this.set('countryName', name);
        this.set('stat1', Math.round(stat1, 0).toString());
        this.set('stat2', Math.round(stat2, 0).toString());
      }
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday('sdg-dash/landing/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    countryName: "My Country",

    actions: {
      loadOverviewSDG: function loadOverviewSDG() {
        console.log('sdg overview load');
        _ember['default'].$('#stage').fadeOut().promise().then((function () {
          _ember['default'].$('.collage').removeWhitespace().collagePlus({
            'effect': 'effect-2'
          });
        }).bind(this));

        // setTimeout(function() {
        //   Ember.$('#stage').fadeIn();
        // }.bind(this), 2000);
      },

      loadOverviewMap: function loadOverviewMap() {
        console.log('map overview load');
      }
    }

  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/landing/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 6
            },
            "end": {
              "line": 17,
              "column": 6
            }
          },
          "moduleName": "sdg-dash/landing/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "src", "images/landing/sdg.png");
          dom.setAttribute(el1, "class", "img-thumbnail landing-sdg-img-only");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 21,
              "column": 6
            },
            "end": {
              "line": 23,
              "column": 6
            }
          },
          "moduleName": "sdg-dash/landing/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "src", "images/landing/map.png");
          dom.setAttribute(el1, "class", "img-thumbnail landing-map-img-only");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["loadOverviewMap"], [], ["loc", [null, [22, 13], [22, 43]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 28,
            "column": 10
          }
        },
        "moduleName": "sdg-dash/landing/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        dom.setAttribute(el1, "id", "stage");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" <div class=\"row pad-bottom-20\">\n    <div class=\"col-xs-6 col-xs-offset-3 pad-bottom-20 text-center\">\n      <h2 >Just Show Me</h2><h4>(ex: Kenya, SDG4, Education)</h4>\n    </div>\n    <div class=\"col-xs-7 col-xs-offset-3\">\n      {{ input class=\"form-control search-box\"}}\n    </div>\n  </div> ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        dom.setAttribute(el2, "id", "searchByRow");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-12 pad-bottom-20");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        dom.setAttribute(el4, "class", "text-center");
        var el5 = dom.createTextNode("Search By");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" <img {{ action \"loadOverviewSDG\" }} src=\"images/landing/sdg.png\" class=\"img-thumbnail landing-sdg-img-only\"> ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-6");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" <img {{ action \"loadOverviewMap\" }} src=\"images/landing/map.png\" class=\"img-thumbnail landing-map-img-only\"> ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0, 3]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [5]), 1, 1);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "link-to", ["sdg-overview"], [], 0, null, ["loc", [null, [15, 6], [17, 18]]]], ["block", "link-to", ["map-overview"], [], 1, null, ["loc", [null, [21, 6], [23, 18]]]], ["content", "outlet", ["loc", [null, [28, 0], [28, 10]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
efineday("sdg-dash/locales/ar/config", ["exports"], function (exports) {
  // Ember-I18n includes configuration for common locales. Most users
  // can safely delete this file. Use it if you need to override behavior
  // for a locale or efineday behavior for a locale that Ember-I18n
  // doesn't know about.
  exports["default"] = {
    // rtl: [true|FALSE],
    //
    // pluralForm: function(count) {
    //   if (count === 0) { return 'zero'; }
    //   if (count === 1) { return 'one'; }
    //   if (count === 2) { return 'two'; }
    //   if (count < 5) { return 'few'; }
    //   if (count >= 5) { return 'many'; }
    //   return 'other';
    // }
  };
});
efineday("sdg-dash/locales/ar/translations", ["exports"], function (exports) {
  exports["default"] = {
    "application": {
      "title": "Objectivos de Desarrollo Sostenbile",
      "header": {
        "signIn": "Sign In",
        "signOut": "Sign Out",
        "sdghome": "SDG Home Page",
        "about": "Acerca"
      },
      "languages": {
        "english": "English",
        "arabic": "العربية"
      }
    }

    // "some.translation.key": "Text for some.translation.key",
    //
    // "a": {
    //   "nested": {
    //     "key": "Text for a.nested.key"
    //   }
    // },
    //
    // "key.with.interpolation": "Text with {{anInterpolation}}"
  };
});
efineday("sdg-dash/locales/en/config", ["exports"], function (exports) {
  // Ember-I18n includes configuration for common locales. Most users
  // can safely delete this file. Use it if you need to override behavior
  // for a locale or efineday behavior for a locale that Ember-I18n
  // doesn't know about.
  exports["default"] = {
    // rtl: [true|FALSE],
    //
    // pluralForm: function(count) {
    //   if (count === 0) { return 'zero'; }
    //   if (count === 1) { return 'one'; }
    //   if (count === 2) { return 'two'; }
    //   if (count < 5) { return 'few'; }
    //   if (count >= 5) { return 'many'; }
    //   return 'other';
    // }
  };
});
efineday("sdg-dash/locales/en/translations", ["exports"], function (exports) {
  exports["default"] = {

    "application": {
      "title": "The Sustainable Development Goals",
      "header": {
        "signIn": "Sign In",
        "signOut": "Sign Out",
        "sdghome": "SDG Home Page",
        "about": "About",
        "samples": "Samples"
      },
      "goal_locale": "Goal",
      "languages": {
        "en": "English",
        "ar": "العربية",
        "es": "Español",
        "fr": "Français",
        "ru": "Русский"
      },
      "about": {
        "title": "About",
        "text": "This is a conceptual web application that can be used to discover, use and share data, services & content related to the Sustainable Development Goals.",
        "data_disclaimer": "Data Disclaimer",
        "data_disclaimer_text": "The depiction and use of boundaries, geographic names and related data shown on maps and included in lists, tables, documents, and databases on this web site are not warranted to be error free nor do they necessarily imply official endorsement or acceptance by Esri.",
        "btn_close": "Close"
      }
    }

    // "some.translation.key": "Text for some.translation.key",
    //
    // "a": {
    //   "nested": {
    //     "key": "Text for a.nested.key"
    //   }
    // },
    //
    // "key.with.interpolation": "Text with {{anInterpolation}}"
  };
});
efineday("sdg-dash/locales/es/config", ["exports"], function (exports) {
  // Ember-I18n includes configuration for common locales. Most users
  // can safely delete this file. Use it if you need to override behavior
  // for a locale or efineday behavior for a locale that Ember-I18n
  // doesn't know about.
  exports["default"] = {
    // rtl: [true|FALSE],
    //
    // pluralForm: function(count) {
    //   if (count === 0) { return 'zero'; }
    //   if (count === 1) { return 'one'; }
    //   if (count === 2) { return 'two'; }
    //   if (count < 5) { return 'few'; }
    //   if (count >= 5) { return 'many'; }
    //   return 'other';
    // }
  };
});
efineday("sdg-dash/locales/es/translations", ["exports"], function (exports) {
  exports["default"] = {

    "application": {
      "title": "Objectivos de Desarrollo Sostenbile",
      "header": {
        "signIn": "Sign In",
        "signOut": "Sign Out",
        "sdghome": "SDG Home Page",
        "about": "Acerca",
        "samples": "Las muestras"
      },
      "goal_locale": "Objectivo",
      "languages": {
        "en": "English",
        "ar": "العربية",
        "es": "Español",
        "fr": "Français",
        "ru": "Русский"
      },
      "about": {
        "title": "Acerca",
        "text": "Esta es una aplicación web conceptual que puede ser utilizado para descubrir, usar y compartir datos, servicios y contenidos relacionados con los objetivos del desarrollo sostenible.",
        "data_disclaimer": "Negación de datos",
        "data_disclaimer_text": "La representación y uso de fronteras, nombres geográficos y demás datos relacionados mostrados en mapas e incluidos en listas, tablas, documentos y bases de datos en este sitio web no están garantizados de estar libres de errores ni necesariamente implica reconocimiento o aceptación por parte Esri.",
        "btn_close": "Cerca"
      }
    }

    // "some.translation.key": "Text for some.translation.key",
    //
    // "a": {
    //   "nested": {
    //     "key": "Text for a.nested.key"
    //   }
    // },
    //
    // "key.with.interpolation": "Text with {{anInterpolation}}"
  };
});
efineday("sdg-dash/locales/fr/config", ["exports"], function (exports) {
  // Ember-I18n includes configuration for common locales. Most users
  // can safely delete this file. Use it if you need to override behavior
  // for a locale or efineday behavior for a locale that Ember-I18n
  // doesn't know about.
  exports["default"] = {
    // rtl: [true|FALSE],
    //
    // pluralForm: function(count) {
    //   if (count === 0) { return 'zero'; }
    //   if (count === 1) { return 'one'; }
    //   if (count === 2) { return 'two'; }
    //   if (count < 5) { return 'few'; }
    //   if (count >= 5) { return 'many'; }
    //   return 'other';
    // }
  };
});
efineday("sdg-dash/locales/fr/translations", ["exports"], function (exports) {
  exports["default"] = {
    "application": {
      "title": "Objectifs de Développement Durable",
      "header": {
        "signIn": "Sign In",
        "signOut": "Sign Out",
        "sdghome": "SDG Home Page",
        "about": "Contexte",
        "samples": "Èchantillons"
      },
      "goal_locale": "Objectif",
      "languages": {
        "en": "English",
        "ar": "العربية",
        "es": "Español",
        "fr": "Français",
        "ru": "Русский"
      },
      "about": {
        "title": "Contexte",
        "text": "Ceci est une application web conceptuel qui peut être utilisé pour découvrir , utiliser et partager des données , des services et du contenu en rapport avec les objectifs de développement durable.",
        "data_disclaimer": "Avertissement de données",
        "data_disclaimer_text": "La représentation et l'utilisation des limites , des noms géographiques et les données connexes figurant sur les cartes et incluses dans des listes , des tableaux , des documents et des bases de données sur ce site Web ne sont pas garantis sans erreur et n'impliquent nécessairement l'approbation ou acceptation officielle par Esri.",
        "btn_close": "Fermer"
      }
    }

    // "some.translation.key": "Text for some.translation.key",
    //
    // "a": {
    //   "nested": {
    //     "key": "Text for a.nested.key"
    //   }
    // },
    //
    // "key.with.interpolation": "Text with {{anInterpolation}}"
  };
});
efineday("sdg-dash/locales/ru/config", ["exports"], function (exports) {
  // Ember-I18n includes configuration for common locales. Most users
  // can safely delete this file. Use it if you need to override behavior
  // for a locale or efineday behavior for a locale that Ember-I18n
  // doesn't know about.
  exports["default"] = {
    // rtl: [true|FALSE],
    //
    // pluralForm: function(count) {
    //   if (count === 0) { return 'zero'; }
    //   if (count === 1) { return 'one'; }
    //   if (count === 2) { return 'two'; }
    //   if (count < 5) { return 'few'; }
    //   if (count >= 5) { return 'many'; }
    //   return 'other';
    // }
  };
});
efineday("sdg-dash/locales/ru/translations", ["exports"], function (exports) {
  exports["default"] = {
    "application": {
      "title": "Цели в области устойчивого развития",
      "header": {
        "signIn": "Sign In",
        "signOut": "Sign Out",
        "sdghome": "SDG Home Page",
        "about": "ОСНОВНЫЕ СВЕДЕНИЯ",
        "samples": "Образцы"
      },
      "goal_locale": "Цель",
      "languages": {
        "en": "English",
        "ar": "العربية",
        "es": "Español",
        "fr": "Français",
        "ru": "Русский"
      },
      "about": {
        "title": "ОСНОВНЫЕ СВЕДЕНИЯ",
        "text": "Это концептуальный вебприложение, которое может быть использовано для обнаружения, использования и обмена данными, услуги & контент, связанных с устойчивым целей развития.",
        "data_disclaimer": "Отказ от данных",
        "data_disclaimer_text": "описание и использование границ, географических названий и связанных с ними данных, представленных на картах и включенных в списки, таблицы, документы и базы данных на данном вебсайте, не гарантируется отсутствие ошибок и они не обязательно означают официального одобрения или признания со стороны Esri.",
        "btn_close": "Закрыть"
      }
    }
    // "some.translation.key": "Text for some.translation.key",
    //
    // "a": {
    //   "nested": {
    //     "key": "Text for a.nested.key"
    //   }
    // },
    //
    // "key.with.interpolation": "Text with {{anInterpolation}}"
  };
});
efineday('sdg-dash/map-overview/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/map-overview/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 4
            },
            "end": {
              "line": 5,
              "column": 4
            }
          },
          "moduleName": "sdg-dash/map-overview/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "glyphicon glyphicon-menu-left");
          dom.setAttribute(el1, "aria-hidden", "true");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("Back\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 0
          }
        },
        "moduleName": "sdg-dash/map-overview/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row pad-bottom-20");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row pad-bottom-20");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-xs-7 col-xs-offset-3");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "panel panel-default");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "panel-body no-padding");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3, 1]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [5, 1, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["landing"], ["class", "btn btn-default btn-xs", "tagName", "button"], 0, null, ["loc", [null, [3, 4], [5, 16]]]], ["inline", "input", [], ["class", "form-control search-box", "placeholder", "Search"], ["loc", [null, [9, 6], [9, 69]]]], ["content", "esri-map", ["loc", [null, [15, 8], [15, 20]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
efineday('sdg-dash/map-service/service', ['exports', 'ember'], function (exports, _ember) {
  // import Map from 'esri/map';
  // import FeatureLayer from 'esri/layers/FeatureLayer';
  // import GraphicsLayer from 'esri/layers/GraphicsLayer';
  // import arcgisUtils from 'esri/arcgis/utils';

  exports['default'] = _ember['default'].Service.extend({

    handlers: [],

    createMap: function createMap(el, opts) {
      opts = Object.assign({
        minZoom: 2,
        wrapAround180: true,
        smartNavigation: false,
        navigationMode: 'css-transforms',
        fitExtent: true,
        logo: false,
        showAttribution: false
      }, opts);
      var map = new Map(el, opts);
      this.handlers.push(map.on('load', this.onMapLoaded.bind(this)));
      this.set('map', map);
      return map;
    },

    createArcGISMap: function createArcGISMap(el, webmap, opts) {
      return arcgisUtils.createMap(webmap, el, opts).then((function (response) {
        this.set('map', response.map);
        return response;
      }).bind(this));
    },

    onMapLoaded: function onMapLoaded() {
      this.map.disableScrollWheelZoom();
      //this.map.infoWindow.titleInBody = false;
      this.map.infoWindow.anchor = 'right';
      // this.trigger('map-loaded');
    },

    onMapExtentChanged: function onMapExtentChanged() {
      var gExt = this.map.geographicExtent;
      var ext = _ember['default'].Object.create({
        xmin: round(gExt.xmin, 3),
        ymin: round(gExt.ymin, 3),
        xmax: round(gExt.xmax, 3),
        ymax: round(gExt.ymax, 3)
      });
      this.set('extent', ext);
      //this.trigger('map-extent-changed', Date.now());
    },

    destroyMap: function destroyMap() {
      var map = this.get('map');
      this.handlers.forEach(function (handler) {
        handler.remove();
      });
      if (map) {
        map.destroy();
        this.set('map', null);
      }
    },

    addFeatureLayer: function addFeatureLayer(url, opts, renderer) {
      var map = this.get('map');
      var layer = new FeatureLayer(url, opts);
      if (renderer) {
        layer.setRenderer(renderer);
      }
      return map.addLayer(layer);
    },

    addGraphicsLayer: function addGraphicsLayer(renderer) {
      var map = this.get('map');
      var gl = new GraphicsLayer();
      if (renderer) {
        gl.setRenderer(renderer);
      }
      return map.addLayer(gl);
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday('sdg-dash/mixins/loading-slider', ['exports', 'ember'], function (exports, _ember) {
  var Mixin = _ember['default'].Mixin;
  var inject = _ember['default'].inject;
  var isPresent = _ember['default'].isPresent;
  exports['default'] = Mixin.create({
    loadingSlider: inject.service(),

    actions: {
      loading: function loading() {
        var loadingSliderService = this.get('loadingSlider');
        loadingSliderService.startLoading();
        if (isPresent(this.router)) {
          this.router.one('didTransition', function () {
            loadingSliderService.endLoading();
          });
        }
        if (this.get('bubbleLoadingSlider')) {
          return true;
        }
      },

      finished: function finished() {
        this.get('loadingSlider').endLoading();
      }
    }
  });
});
efineday('sdg-dash/router', ['exports', 'ember', 'sdg-dash/config/environment'], function (exports, _ember, _sdgDashConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _sdgDashConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('home');
    this.route('landing');
    this.route('sdg-overview', { path: '/' });
    this.route('map-overview');
    this.route('sdg', { path: '/sdg-overview/:goal_id' }, function () {
      // this.route('status', { path: '/'},function () {});
    });
    this.route('video-player');
  });

  exports['default'] = Router;
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday('sdg-dash/sdg/adapter', ['exports', 'ember-data', 'sdg-dash/config/environment'], function (exports, _emberData, _sdgDashConfigEnvironment) {
  exports['default'] = _emberData['default'].JSONAPIAdapter.extend({
    urlForQuery: function urlForQuery() {
      return _sdgDashConfigEnvironment['default'].sdgApi + 'goals';
    },
    urlForQueryRecord: function urlForQueryRecord() {
      return _sdgDashConfigEnvironment['default'].sdgApi + 'goals';
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday('sdg-dash/sdg/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    queryParams: ['geo_group', 'geo_value', 'geo_level', 'target_id'],

    geo_group: null,
    geo_value: null,
    geo_level: null,
    target_id: null,

    actions: {

      changeTarget: function changeTarget(target) {
        this.model.set('selected_target', target);

        var params = {
          queryParams: {
            geo_group: this.geo_group || 'countries',
            geo_value: this.geo_value || 'GLOBAL',
            target_id: target.id
          }
        };
        if (target.id === 'SDG Index') {
          params.queryParams = {
            geo_group: 'countries',
            geo_value: 'GLOBAL',
            target_id: null
          };
        }

        this.transitionToRoute(params).then((function () {
          this.get('session').loadDashboardCards(this.geo_group, this.geo_value, this.model.get('id'), target.id);
        }).bind(this));
      },

      changeSdg: function changeSdg(selected) {
        console.log('changeSdg from controller::sdg', selected);
        var params = {
          queryParams: {
            geo_group: this.geo_group,
            // geo_value: this.geo_value,
            geo_value: 'GLOBAL',
            target_id: null
          }
        };
        this.transitionToRoute('sdg', selected, params);
      },

      goToGeography: function goToGeography(geography_group, qp_value) {
        var svc = this.get('session');
        var selected_target = svc.get('selected_target');

        var target_id = null;
        if (selected_target.id === 'SDG Index') {
          selected_target = null;
        } else {
          target_id = selected_target.id;
        }

        var params = {
          queryParams: {
            geo_group: geography_group,
            geo_value: qp_value,
            target_id: target_id
          }
        };

        this.transitionToRoute(params).then((function () {
          this.get('session').loadDashboardCards(geography_group, qp_value, this.model.get('id'), target_id);
        }).bind(this));
      },

      goToGeoLevel: function goToGeoLevel(geo_level) {
        var params = {
          queryParams: {
            geo_level: geo_level
          }
        };

        this.transitionToRoute(params).then((function () {
          this.get('session').reconfigureAtGeoLevel(geo_level);
        }).bind(this));
      }
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday('sdg-dash/sdg/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    title: _emberData['default'].attr('string'),
    displayNumber: _emberData['default'].attr('string'),
    realNumber: _emberData['default'].attr('integer'),
    description: _emberData['default'].attr('description'),
    colorHex: _emberData['default'].attr('string'),
    colorRgb: _emberData['default'].attr('string'),
    targets: _emberData['default'].attr()
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday('sdg-dash/sdg/route', ['exports', 'ember', 'sdg-dash/config/environment', 'sdg-dash/utils/colors', 'ic-ajax', 'npm:js-cookie'], function (exports, _ember, _sdgDashConfigEnvironment, _sdgDashUtilsColors, _icAjax, _npmJsCookie) {
  exports['default'] = _ember['default'].Route.extend({

    i18n: _ember['default'].inject.service(),

    queryParams: {
      geo_group: {
        refreshModel: true
      },
      geo_value: {
        refreshModel: true
      },
      geo_level: {
        refreshModel: true
      },
      target_id: {
        refreshModel: true
      }
    },

    fetchGoal: function fetchGoal(id, locale) {
      return (0, _icAjax['default'])({
        url: _sdgDashConfigEnvironment['default'].sdgApi + 'goals',
        data: {
          ids: id,
          locale: locale
        },
        dataType: 'json'
      });
    },

    i18nChanged: _ember['default'].observer('i18n.locale', function () {
      var locale = this.get('i18n.locale');
      console.log('locale is now', locale);

      var sel_sdg = this.get('session').get('selected_sdg');
      if (!sel_sdg) {
        return;
      }
      var id = sel_sdg.get('id');
      this.fetchGoal(id, locale).then((function (response) {
        var data = response.data;
        var title = data[0].title;
        var short = data[0].short;

        this.modelFor('sdg').set('title', short);
        this.modelFor('sdg').set('description', title);
      }).bind(this))['catch'](function (error) {
        console.log('error fetching words for locale', error);
      });
    }),

    model: function model(params) {
      var locale = _npmJsCookie['default'].get('current_locale');
      if (!locale) {
        locale = this.get('i18n.locale');
      }
      var queryParams = {
        locale: locale,
        ids: params.goal_id,
        targets: true,
        indicators: true,
        includeMetadata: false
      };
      return this.store.queryRecord('sdg', queryParams);
    },

    afterModel: function afterModel(sdg, transition) {
      console.log(sdg);
      var goal = transition.params.sdg.goal_id;

      var svc = this.get('session');
      svc.set('selected_sdg', sdg);

      // reset all the cards!!
      svc.set('cards', []);

      // handle in-bound query params if they exist
      var geo_group = transition.queryParams.geo_group || 'countries';
      var geo_value = transition.queryParams.geo_value || 'GLOBAL';
      var geo_level = transition.queryParams.geo_level || null;
      svc.setProperties({
        selected_geo_group: geo_group,
        selected_geo_value: geo_value,
        selected_geo_level: geo_level
      });

      // targets
      var targets = sdg.get('targets');
      var in_target = transition.queryParams.target_id;
      var selected_target = undefined;
      if (in_target) {
        selected_target = targets.filter(function (t) {
          return t.id === in_target;
        })[0];
      } else {
        selected_target = { id: 'SDG Index' };
        svc.set('selected_geo_value', 'GLOBAL');
      }

      // keep this in
      sdg.set('selected_target', selected_target);

      svc.setProperties({
        selected_targets: targets,
        selected_target: selected_target,
        selected_target_description: targets[0].title
      });

      var t_id = selected_target ? selected_target.id : null;

      this._themePage(sdg.get('colorHex'));

      svc.loadDashboardCards(geo_group, geo_value, goal, t_id);
    },

    _themePage: function _themePage(dark_color) {
      var light_color = _sdgDashUtilsColors['default'].shadeColor(dark_color, 0.75);
      console.log('light color', light_color, 'dark_color', dark_color);

      _ember['default'].$('.country-select-container .bootstrap-select > button').css('color', dark_color);
      _ember['default'].$('.country-select-container .bootstrap-select > button').css('border-color', dark_color);
    },

    // attempt to remove "sticky" query params
    // https://guides.emberjs.com/v2.3.0/routing/query-params/#toc_sticky-query-param-values
    resetController: function resetController(controller, isExiting) {
      if (isExiting) {
        // isExiting would be false if only the route's model was changing
        controller.set('geo_group', null);
        controller.set('geo_value', null);
        controller.set('geo_level', null);
        controller.set('target_id', null);
      }
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday('sdg-dash/sdg/serializer', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONAPISerializer.extend({

    normalizeQueryResponse: function normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
      var data = payload.data.map(function (item) {
        return {
          id: item.goal,
          type: 'sdg',
          attributes: {
            title: item.short,
            displayNumber: item.goal < 10 ? '0' + item.goal : item.goal.toString(),
            realNumber: item.goal,
            description: item.title,
            colorHex: item.colorInfo.hex,
            colorRgb: item.colorInfo.rgb.join(',')
          }
        };
      });
      return {
        "data": data,
        "meta": {}
      };
    },

    normalizeQueryRecordResponse: function normalizeQueryRecordResponse(store, primaryModelClass, payload, id, requestType) {
      var goal = payload.data[0];
      // assign incrementing id to targets for UI display
      goal.targets.forEach(function (t, index) {
        t.autoId = index;
      });
      var data = {
        id: goal.goal,
        type: 'sdg',
        attributes: {
          displayNumber: goal.goal < 10 ? '0' + goal.goal : goal.goal.toString(),
          realNumber: goal.goal,
          title: goal.short,
          description: goal.title,
          colorHex: goal.colorInfo.hex,
          colorRgb: goal.colorInfo.rgb,
          targets: goal.targets
        }
      };
      return {
        "data": data,
        "meta": {}
      };
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/sdg/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 79,
              "column": 4
            },
            "end": {
              "line": 90,
              "column": 4
            }
          },
          "moduleName": "sdg-dash/sdg/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    \n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-xs-2 vcenter target-label-container");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          dom.setAttribute(el3, "class", "target-label");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-xs-10 vcenter");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h4");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("hr");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3, 1]), 0, 0);
          return morphs;
        },
        statements: [["content", "model.selected_target.id", ["loc", [null, [83, 35], [83, 63]]]], ["content", "model.selected_target.title", ["loc", [null, [86, 12], [86, 43]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 92,
              "column": 4
            },
            "end": {
              "line": 94,
              "column": 4
            }
          },
          "moduleName": "sdg-dash/sdg/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "grid-layout", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [93, 26], [93, 31]]]]], [], []], "cards", ["subexpr", "@mut", [["get", "session.cards", ["loc", [null, [93, 38], [93, 51]]]]], [], []], "action", "noOp"], ["loc", [null, [93, 6], [93, 67]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 95,
                "column": 6
              },
              "end": {
                "line": 100,
                "column": 6
              }
            },
            "moduleName": "sdg-dash/sdg/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "loader is-active padding-leader-3 padding-trailer-3");
            dom.setAttribute(el1, "style", "margin-top: 100px;");
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "loader-bars");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n          ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "loader-text");
            var el3 = dom.createTextNode("Loading ...");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 100,
                "column": 6
              },
              "end": {
                "line": 102,
                "column": 6
              }
            },
            "moduleName": "sdg-dash/sdg/template.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "no-data-card", ["loc", [null, [101, 8], [101, 24]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 94,
              "column": 4
            },
            "end": {
              "line": 104,
              "column": 4
            }
          },
          "moduleName": "sdg-dash/sdg/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("      \n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "session.isLoadingCards", ["loc", [null, [95, 12], [95, 34]]]]], [], 0, 1, ["loc", [null, [95, 6], [102, 13]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 109,
              "column": 0
            },
            "end": {
              "line": 111,
              "column": 0
            }
          },
          "moduleName": "sdg-dash/sdg/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "targets-select-modal", [], ["changeTarget", ["subexpr", "action", ["changeTarget"], [], ["loc", [null, [110, 38], [110, 61]]]]], ["loc", [null, [110, 2], [110, 63]]]]],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 113,
              "column": 0
            },
            "end": {
              "line": 115,
              "column": 0
            }
          },
          "moduleName": "sdg-dash/sdg/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "contribute-modal", ["loc", [null, [114, 2], [114, 22]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 115,
            "column": 19
          }
        },
        "moduleName": "sdg-dash/sdg/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid no-padding");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "row");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-3 text-center");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "class", "img-shift");
        dom.setAttribute(el5, "height", "150");
        dom.setAttribute(el5, "width", "150");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "col-xs-7 pad-top-10");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-xs-12");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("h1");
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(" ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode(": ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment(" <h1>{{session.goalLocale}} {{model.displayNumber}}: {{session.titleLocale}}</h1> ");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "row");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "col-xs-12");
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("p");
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment(" <p>{{session.descriptionLocale}}</p> ");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" <div class=\"row\">\n          <div class=\"col-xs-12 pad-bottom-20\">\n{{#if authSession.isAuthenticated}}\n              <button class=\"btn btn-default btn-md\" {{action 'signout'}}>Sign Out</button>\n            {{else}}\n              <button class=\"btn btn-default btn-md\" {{action 'signin'}}>Sign In</button>\n            {{/if}}          </div>\n        </div> ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.setAttribute(el3, "class", "sdg-separator");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("nav");
        dom.setAttribute(el3, "class", "navbar navbar-default navbar-selector text-center");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" <div class=\"container\"> ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "navbar-header");
        var el5 = dom.createTextNode("\n          ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "navbar-toggle collapsed");
        dom.setAttribute(el5, "data-toggle", "collapse");
        dom.setAttribute(el5, "data-target", "#bs-example-navbar-collapse-1");
        dom.setAttribute(el5, "aria-expanded", "false");
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "sr-only");
        var el7 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "icon-bar");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "icon-bar");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "icon-bar");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          \n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("img");
        dom.setAttribute(el5, "class", "glyph-sdg-logo");
        dom.setAttribute(el5, "src", "images/sdg/main-logo-white48x48.png");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          \n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "collapse navbar-collapse selector-row");
        dom.setAttribute(el4, "id", "bs-example-navbar-collapse-1");
        var el5 = dom.createTextNode("\n          \n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "btn btn-nocursor");
        var el6 = dom.createTextNode("\n              ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "navbar-brand glyph-target-select");
        var el7 = dom.createTextNode("\n                ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "glyphicon glyphicon-record");
        dom.setAttribute(el7, "aria-hidden", "true");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("     \n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "btn btn-nocursor");
        var el6 = dom.createTextNode("\n              ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "navbar-brand glyph-target-select");
        var el7 = dom.createTextNode("\n                ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "glyphicon glyphicon-globe");
        dom.setAttribute(el7, "aria-hidden", "true");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" {{geography-search-box model=model goToGeography=(action 'goToGeography')}}   ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("       \n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("  \n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "btn btn-nocursor");
        var el6 = dom.createTextNode("\n              ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "navbar-brand glyph-target-select");
        var el7 = dom.createTextNode("\n                ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7, "class", "glyphicon glyphicon-map-marker");
        dom.setAttribute(el7, "aria-hidden", "true");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n              ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n            ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n          \n        ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" </div> ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "row marg-bottom-50");
        dom.setAttribute(el1, "style", "height: 100;");
        var el2 = dom.createTextNode("  \n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container status-container");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [0]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element3, [1, 1]);
        var element5 = dom.childAt(element3, [3]);
        var element6 = dom.childAt(element5, [1, 1, 1]);
        var element7 = dom.childAt(element2, [5]);
        var element8 = dom.childAt(element7, [5]);
        var element9 = dom.childAt(fragment, [2, 1]);
        var morphs = new Array(16);
        morphs[0] = dom.createAttrMorph(element1, 'style');
        morphs[1] = dom.createAttrMorph(element2, 'style');
        morphs[2] = dom.createAttrMorph(element4, 'src');
        morphs[3] = dom.createMorphAt(element6, 0, 0);
        morphs[4] = dom.createMorphAt(element6, 2, 2);
        morphs[5] = dom.createMorphAt(element6, 4, 4);
        morphs[6] = dom.createMorphAt(dom.childAt(element5, [3, 1, 1]), 0, 0);
        morphs[7] = dom.createAttrMorph(element7, 'style');
        morphs[8] = dom.createMorphAt(element8, 1, 1);
        morphs[9] = dom.createMorphAt(element8, 5, 5);
        morphs[10] = dom.createMorphAt(element8, 11, 11);
        morphs[11] = dom.createMorphAt(element8, 15, 15);
        morphs[12] = dom.createMorphAt(element9, 1, 1);
        morphs[13] = dom.createMorphAt(element9, 3, 3);
        morphs[14] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[15] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "style", ["concat", ["background-color:", ["get", "model.colorHex", ["loc", [null, [1, 66], [1, 80]]]], ";"]]], ["attribute", "style", ["concat", ["background-color:", ["get", "model.colorHex", ["loc", [null, [2, 51], [2, 65]]]], ";color:white;"]]], ["attribute", "src", ["concat", ["images/sdg/TGG_Icon_Only_Color_", ["get", "model.displayNumber", ["loc", [null, [5, 69], [5, 88]]]], ".gif"]]], ["inline", "t", ["application.goal_locale"], [], ["loc", [null, [10, 16], [10, 47]]]], ["content", "model.displayNumber", ["loc", [null, [10, 48], [10, 71]]]], ["content", "model.title", ["loc", [null, [10, 73], [10, 88]]]], ["content", "model.description", ["loc", [null, [16, 15], [16, 36]]]], ["attribute", "style", ["concat", ["background-color:rgba(", ["get", "model.colorRgb", ["loc", [null, [33, 98], [33, 112]]]], ", 0.75);"]]], ["inline", "sdg-select-box", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [49, 35], [49, 40]]]]], [], []], "changeSdg", ["subexpr", "action", ["changeSdg"], [], ["loc", [null, [49, 51], [49, 71]]]]], ["loc", [null, [49, 12], [49, 74]]]], ["inline", "targets-select-button", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [55, 42], [55, 47]]]]], [], []]], ["loc", [null, [55, 12], [55, 50]]]], ["inline", "country-select-box", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [62, 39], [62, 44]]]]], [], []], "goToGeography", ["subexpr", "action", ["goToGeography"], [], ["loc", [null, [62, 59], [62, 83]]]]], ["loc", [null, [62, 12], [62, 85]]]], ["inline", "geo-levels-select-box", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [68, 42], [68, 47]]]]], [], []], "goToGeoLevel", "goToGeoLevel"], ["loc", [null, [68, 12], [68, 78]]]], ["block", "unless", [["subexpr", "eq", [["get", "model.selected_target.id", ["loc", [null, [79, 18], [79, 42]]]], "SDG Index"], [], ["loc", [null, [79, 14], [79, 55]]]]], [], 0, null, ["loc", [null, [79, 4], [90, 15]]]], ["block", "if", [["get", "session.cards.length", ["loc", [null, [92, 10], [92, 30]]]]], [], 1, 2, ["loc", [null, [92, 4], [104, 11]]]], ["block", "ember-wormhole", [], ["to", "targets-modal-destination"], 3, null, ["loc", [null, [109, 0], [111, 19]]]], ["block", "ember-wormhole", [], ["to", "contribute-modal-destination"], 4, null, ["loc", [null, [113, 0], [115, 19]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4]
    };
  })());
});
efineday('sdg-dash/sdg-overview/adapter', ['exports', 'ember-data', 'sdg-dash/config/environment'], function (exports, _emberData, _sdgDashConfigEnvironment) {
  exports['default'] = _emberData['default'].JSONAPIAdapter.extend({
    urlForQuery: function urlForQuery() {
      return _sdgDashConfigEnvironment['default'].sdgApi + 'goals';
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday('sdg-dash/sdg-overview/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday('sdg-dash/sdg-overview/model', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({});
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday('sdg-dash/sdg-overview/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    actions: {
      routeToSDG: function routeToSDG(goal) {
        console.log(goal);
        this.transitionTo('sdg', goal.get('realNumber'));
      }
    },

    model: function model() {
      return this.store.query('sdg-overview', {});
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday('sdg-dash/sdg-overview/serializer', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONAPISerializer.extend({

    normalizeQueryResponse: function normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
      var data = payload.data.map(function (item) {
        return {
          id: item.goal,
          type: 'sdg',
          attributes: {
            title: item.short,
            displayNumber: item.goal < 10 ? '0' + item.goal : item.goal.toString(),
            realNumber: item.goal,
            description: item.title,
            colorHex: item.colorInfo.hex,
            colorRgb: item.colorInfo.rgb.join(',')
          }
        };
      });
      return {
        "data": data,
        "meta": {}
      };
    },

    normalizeQueryRecordResponse: function normalizeQueryRecordResponse(store, primaryModelClass, payload, id, requestType) {
      var goal = payload.data[0];
      // assign incrementing id to targets for UI display
      goal.targets.forEach(function (t, index) {
        t.autoId = index;
      });
      var data = {
        id: goal.goal,
        type: 'sdg',
        attributes: {
          displayNumber: goal.goal < 10 ? '0' + goal.goal : goal.goal.toString(),
          realNumber: goal.goal,
          title: goal.short,
          description: goal.title,
          colorHex: goal.colorInfo.hex,
          colorRgb: goal.colorInfo.rgb,
          targets: goal.targets
        }
      };
      return {
        "data": data,
        "meta": {}
      };
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/sdg-overview/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["multiple-nodes", "wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 10
          }
        },
        "moduleName": "sdg-dash/sdg-overview/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container-fluid no-padding");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" <div class=\"container\">\n  <p class=\"bg-info\" style=\"margin-top: 20px;padding:20px;\">Hello! Welcome to a Prototype/POC Dashboard that lets you explore the Sustainable Development Goals. At this point in time, the application is <b>in development</b> and data is sparse so we would recommend using the following link(s) that we'll do our best to keep stable, ok? \n  <br><br> Thanks &amp; enjoy!\n  <br><br>\n    <ul>\n      <li>{{#link-to 'sdg' '2' (query-params geo_group=\"countries\" geo_value=\"KE\" target_id=\"2.1\") }}<b>Goal 02 Zero Hunger</b> - Kenya (Target 2.1){{/link-to}}</li>\n      <li>{{#link-to 'sdg' '3' (query-params geo_group=\"countries\" geo_value=\"GLOBAL\" target_id=\"3.3\") }}<b>Goal 03 Good Health &amp; Well-Being</b> - Global (Target 3.3){{/link-to}}</li>\n      <li>{{#link-to 'sdg' '3' (query-params geo_group=\"countries\" geo_value=\"TH\" target_id=\"3.3\") }}<b>Goal 03 Good Health &amp; Well-Being</b> - Thailand (Target 3.3){{/link-to}}</li>\n      <li>{{#link-to 'sdg' '5' (query-params geo_group=\"countries\" geo_value=\"GLOBAL\" target_id=\"5.5\") }}<b>Goal 05 Gender Equality</b> - Global Progress (Target 5.5){{/link-to}}</li>\n      <li>{{#link-to 'sdg' '11' (query-params geo_group=\"cities\" geo_value=\"GLOBAL_CITIES\" target_id=\"11.1\") }}<b>Goal 11 Sustainable Cities &amp; Communities</b> - Global (Target 11.1){{/link-to}}</li>\n      <li>{{#link-to 'sdg' '11' (query-params geo_group=\"cities\" geo_value=\"city_BOGOTA\" target_id=\"11.1\") }}<b>Goal 11 Sustainable Cities &amp; Communities</b> - Bogota (Target 11.1){{/link-to}}</li>\n      <li>{{#link-to 'video-player' (query-params src='aehin')}}<b>Goal 03 Good Health and Well-Being</b> - Access to Health Care Web Application (video){{/link-to}}</li>\n      <li><a href=\"http://dtc-sci01.esri.com/MultidimensionalTemplate/index.html?appid=d73011dceb0e41d0af334912355bddd5\" target=\"_blank\"><b>Goal 13 Climate Action</b> - World Soil Moisture Application</a></li>\n    </ul>\n  </p>\n</div> ");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["inline", "arcgis-map-landing", [], ["class", "landing-map"], ["loc", [null, [2, 2], [2, 46]]]], ["inline", "sdg-overview-collage", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [3, 32], [3, 37]]]]], [], []], "loadSDG", "routeToSDG", "class", "marg-top-neg-50"], ["loc", [null, [3, 2], [3, 85]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday('sdg-dash/services/i18n', ['exports', 'ember-i18n/services/i18n'], function (exports, _emberI18nServicesI18n) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nServicesI18n['default'];
    }
  });
});
efineday("sdg-dash/services/liquid-fire-modals", ["exports", "liquid-fire/modals"], function (exports, _liquidFireModals) {
  exports["default"] = _liquidFireModals["default"];
});
efineday("sdg-dash/services/liquid-fire-transitions", ["exports", "liquid-fire/transition-map"], function (exports, _liquidFireTransitionMap) {
  exports["default"] = _liquidFireTransitionMap["default"];
});
efineday('sdg-dash/services/loading-slider', ['exports', 'ember'], function (exports, _ember) {
  var Service = _ember['default'].Service;
  var Evented = _ember['default'].Evented;
  exports['default'] = Service.extend(Evented, {
    startLoading: function startLoading() {
      this.trigger('startLoading');
    },

    endLoading: function endLoading() {
      this.trigger('endLoading');
    },

    changeAttrs: function changeAttrs(attrs) {
      this.trigger('changeAttrs', attrs);
    }
  });
});
efineday('sdg-dash/session/service', ['exports', 'ember', 'ic-ajax', 'sdg-dash/config/environment'], function (exports, _ember, _icAjax, _sdgDashConfigEnvironment) {
  exports['default'] = _ember['default'].Service.extend({

    available_dashboard_levels: [],
    no_data: true,

    cards: [],
    available_geo_levels: [],

    selected_geo_group: null,
    selected_geo_value: null,
    selected_geo_level: null,

    locale_label: 'English',

    loadDashboardCards: function loadDashboardCards(geography_group, geo_value, goal, target_id) {
      this.set('isLoadingCards', true);

      // START - for testing loading indicator
      // return; //keeps the loading indicator on the page
      // Ember.run.later(this, function() {

      this.loadDashboards(geography_group, geo_value, goal, target_id).then((function (response) {

        this.set('available_dashboards', response.data);

        var cards = [];

        if (response.data[0] && response.data[0].items) {
          cards = response.data[0].items;
          this.set('available_geo_levels', response.data.map(function (d) {
            return d.title;
          }));
        }
        this.set('cards', cards);

        this.set('isLoadingCards', false);
      }).bind(this));

      // END - for testing loading indicator
      // }, 2000);
    },

    loadAvailableGeographies: function loadAvailableGeographies() {
      return (0, _icAjax['default'])({
        url: _sdgDashConfigEnvironment['default'].sdgDashboardsApi + 'geographiesWithData',
        dataType: 'json'
      });
    },

    loadDashboardsAndReconfigure: function loadDashboardsAndReconfigure(country_code, goal) {
      this.loadDashboards(country_code, goal).then(this.reconfigure.bind(this));
    },

    loadDashboards: function loadDashboards(geography_group, geo_value, goal, target_id) {
      var data = {
        geography: geography_group,
        geo_value: geo_value,
        goal: goal
      };

      if (target_id && target_id !== 'SDG Index') {
        data['target_id'] = target_id;
      }

      return (0, _icAjax['default'])({
        url: _sdgDashConfigEnvironment['default'].sdgDashboardsApi + 'dashboards',
        data: data,
        dataType: 'json'
      }).then(function (response) {
        return _ember['default'].RSVP.resolve(response);
      });
    },

    getIndicatorsForTarget: function getIndicatorsForTarget(target_id, metadata) {
      var data = {
        targets: target_id,
        includeMetadata: metadata || false
      };

      return (0, _icAjax['default'])({
        url: _sdgDashConfigEnvironment['default'].sdgApi + 'indicators',
        data: data,
        dataType: 'json'
      });
    },

    getMetadata: function getMetadata(indicator_id) {
      var data = {
        ids: indicator_id,
        includeMetadata: true
      };
      return (0, _icAjax['default'])({
        url: _sdgDashConfigEnvironment['default'].sdgApi + 'indicators',
        data: data,
        dataType: 'json'
      });
    },

    reconfigure: function reconfigure(response) {
      var _this = this;

      var levels = [],
          dash = undefined;

      if (response.data.length > 0 && response.data[0].levels[0]) {
        (function () {
          var r_levels = response.data[0].levels;
          levels = r_levels.map(function (l) {
            return l.title;
          });

          var sel_geo_level = _this.get('selected_geo_level');
          if (!sel_geo_level) {
            dash = response.data[0].levels[0];
          } else {
            dash = response.data[0].levels.filter(function (l) {
              return l.title === sel_geo_level;
            })[0];
          }

          _this.set('selected_dashboard', dash);

          _this.set('available_dashboard_levels', response.data[0].levels);
        })();
      }

      this.set('available_geo_levels', levels);

      this.set('no_data', dash ? true : false);
    },

    reconfigureAtGeoLevel: function reconfigureAtGeoLevel(level) {
      var dashboards = this.get('available_dashboards');
      var new_dash = dashboards.filter(function (b) {
        return b.title === level;
      });

      if (!new_dash || !new_dash[0]) {
        return;
      }

      this.set('cards', new_dash[0].items);
    }
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/templates/-footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 44
          }
        },
        "moduleName": "sdg-dash/templates/-footer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("footer");
        dom.setAttribute(el1, "class", "footer");
        var el2 = dom.createTextNode("hello footer");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
efineday("sdg-dash/templates/-header-nav-right", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 12
            },
            "end": {
              "line": 10,
              "column": 154
            }
          },
          "moduleName": "sdg-dash/templates/-header-nav-right.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("b");
          var el2 = dom.createTextNode("Goal 01 No Poverty");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" - Global (Target 1.1)");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 12
            },
            "end": {
              "line": 11,
              "column": 150
            }
          },
          "moduleName": "sdg-dash/templates/-header-nav-right.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("b");
          var el2 = dom.createTextNode("Goal 02 Zero Hunger");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" - Kenya (Target 2.1)");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 12
            },
            "end": {
              "line": 12,
              "column": 172
            }
          },
          "moduleName": "sdg-dash/templates/-header-nav-right.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("b");
          var el2 = dom.createTextNode("Goal 03 Good Health & Well-Being");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" - Global (Target 3.3)");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 12
            },
            "end": {
              "line": 13,
              "column": 170
            }
          },
          "moduleName": "sdg-dash/templates/-header-nav-right.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("b");
          var el2 = dom.createTextNode("Goal 03 Good Health & Well-Being");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" - Thailand (Target 3.3)");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child4 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 12
            },
            "end": {
              "line": 14,
              "column": 168
            }
          },
          "moduleName": "sdg-dash/templates/-header-nav-right.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("b");
          var el2 = dom.createTextNode("Goal 05 Gender Equality");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" - Global Progress (Target 5.5)");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child5 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 12
            },
            "end": {
              "line": 15,
              "column": 179
            }
          },
          "moduleName": "sdg-dash/templates/-header-nav-right.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("b");
          var el2 = dom.createTextNode("Goal 06 Clean Water and Sanitation");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" - Global Progress (Target 6.1)");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child6 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 12
            },
            "end": {
              "line": 16,
              "column": 180
            }
          },
          "moduleName": "sdg-dash/templates/-header-nav-right.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("b");
          var el2 = dom.createTextNode("Goal 07 Affordable and Clean Energy");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" - Global Progress (Target 7.1)");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child7 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 12
            },
            "end": {
              "line": 17,
              "column": 187
            }
          },
          "moduleName": "sdg-dash/templates/-header-nav-right.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("b");
          var el2 = dom.createTextNode("Goal 11 Sustainable Cities & Communities");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" - Global (Target 11.1)");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child8 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 12
            },
            "end": {
              "line": 18,
              "column": 185
            }
          },
          "moduleName": "sdg-dash/templates/-header-nav-right.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("b");
          var el2 = dom.createTextNode("Goal 11 Sustainable Cities & Communities");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" - Bogota (Target 11.1)");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child9 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 12
            },
            "end": {
              "line": 19,
              "column": 159
            }
          },
          "moduleName": "sdg-dash/templates/-header-nav-right.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("b");
          var el2 = dom.createTextNode("Goal 15 Life on Land");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" - Global (Target 15.1)");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child10 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 21,
              "column": 12
            },
            "end": {
              "line": 21,
              "column": 143
            }
          },
          "moduleName": "sdg-dash/templates/-header-nav-right.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("b");
          var el2 = dom.createTextNode("Goal 03 Good Health and Well-Being");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" - Access to Health Care Web (Video)");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 36,
            "column": 5
          }
        },
        "moduleName": "sdg-dash/templates/-header-nav-right.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1, "class", "nav navbar-nav navbar-right");
        var el2 = dom.createTextNode("\n  \n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "#");
        dom.setAttribute(el3, "data-toggle", "modal");
        dom.setAttribute(el3, "data-target", "#aboutModal");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  \n   ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2, "class", "nav navbar-nav navbar-right");
        var el3 = dom.createTextNode("      \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3, "class", "dropdown");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        dom.setAttribute(el4, "class", "dropdown-toggle");
        dom.setAttribute(el4, "data-toggle", "dropdown");
        dom.setAttribute(el4, "role", "button");
        dom.setAttribute(el4, "aria-haspopup", "true");
        dom.setAttribute(el4, "aria-expanded", "false");
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "caret");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "dropdown-menu");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        dom.setAttribute(el5, "role", "separator");
        dom.setAttribute(el5, "class", "divider");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        dom.setAttribute(el6, "href", "http://dtc-sci01.esri.com/MultidimensionalTemplate/index.html?appid=d73011dceb0e41d0af334912355bddd5");
        dom.setAttribute(el6, "target", "_blank");
        var el7 = dom.createElement("b");
        var el8 = dom.createTextNode("Goal 13 Climate Action");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" - World Soil Moisture (Application)");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3, "class", "dropdown");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("a");
        dom.setAttribute(el4, "href", "#");
        dom.setAttribute(el4, "class", "dropdown-toggle");
        dom.setAttribute(el4, "data-toggle", "dropdown");
        dom.setAttribute(el4, "role", "button");
        dom.setAttribute(el4, "aria-haspopup", "true");
        dom.setAttribute(el4, "aria-expanded", "false");
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "class", "caret");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "dropdown-menu");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createElement("a");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [3]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element2, [3]);
        var element4 = dom.childAt(element1, [3]);
        var element5 = dom.childAt(element4, [3]);
        var element6 = dom.childAt(element5, [1, 0]);
        var element7 = dom.childAt(element5, [3, 0]);
        var element8 = dom.childAt(element5, [5, 0]);
        var element9 = dom.childAt(element5, [7, 0]);
        var morphs = new Array(22);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 0]), 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [1]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(element3, [1]), 0, 0);
        morphs[3] = dom.createMorphAt(dom.childAt(element3, [3]), 0, 0);
        morphs[4] = dom.createMorphAt(dom.childAt(element3, [5]), 0, 0);
        morphs[5] = dom.createMorphAt(dom.childAt(element3, [7]), 0, 0);
        morphs[6] = dom.createMorphAt(dom.childAt(element3, [9]), 0, 0);
        morphs[7] = dom.createMorphAt(dom.childAt(element3, [11]), 0, 0);
        morphs[8] = dom.createMorphAt(dom.childAt(element3, [13]), 0, 0);
        morphs[9] = dom.createMorphAt(dom.childAt(element3, [15]), 0, 0);
        morphs[10] = dom.createMorphAt(dom.childAt(element3, [17]), 0, 0);
        morphs[11] = dom.createMorphAt(dom.childAt(element3, [19]), 0, 0);
        morphs[12] = dom.createMorphAt(dom.childAt(element3, [23]), 0, 0);
        morphs[13] = dom.createMorphAt(dom.childAt(element4, [1]), 1, 1);
        morphs[14] = dom.createElementMorph(element6);
        morphs[15] = dom.createMorphAt(element6, 0, 0);
        morphs[16] = dom.createElementMorph(element7);
        morphs[17] = dom.createMorphAt(element7, 0, 0);
        morphs[18] = dom.createElementMorph(element8);
        morphs[19] = dom.createMorphAt(element8, 0, 0);
        morphs[20] = dom.createElementMorph(element9);
        morphs[21] = dom.createMorphAt(element9, 0, 0);
        return morphs;
      },
      statements: [["inline", "t", ["application.header.about"], [], ["loc", [null, [3, 64], [3, 98]]]], ["inline", "t", ["application.header.samples"], [], ["loc", [null, [8, 6], [8, 42]]]], ["block", "link-to", ["sdg", "1", ["subexpr", "query-params", [], ["geo_group", "countries", "geo_value", "GLOBAL", "target_id", "1.1"], ["loc", [null, [10, 33], [10, 104]]]]], [], 0, null, ["loc", [null, [10, 12], [10, 166]]]], ["block", "link-to", ["sdg", "2", ["subexpr", "query-params", [], ["geo_group", "countries", "geo_value", "KE", "target_id", "2.1"], ["loc", [null, [11, 33], [11, 100]]]]], [], 1, null, ["loc", [null, [11, 12], [11, 162]]]], ["block", "link-to", ["sdg", "3", ["subexpr", "query-params", [], ["geo_group", "countries", "geo_value", "GLOBAL", "target_id", "3.3"], ["loc", [null, [12, 33], [12, 104]]]]], [], 2, null, ["loc", [null, [12, 12], [12, 184]]]], ["block", "link-to", ["sdg", "3", ["subexpr", "query-params", [], ["geo_group", "countries", "geo_value", "TH", "target_id", "3.3"], ["loc", [null, [13, 33], [13, 100]]]]], [], 3, null, ["loc", [null, [13, 12], [13, 182]]]], ["block", "link-to", ["sdg", "5", ["subexpr", "query-params", [], ["geo_group", "countries", "geo_value", "GLOBAL", "target_id", "5.5"], ["loc", [null, [14, 33], [14, 104]]]]], [], 4, null, ["loc", [null, [14, 12], [14, 180]]]], ["block", "link-to", ["sdg", "6", ["subexpr", "query-params", [], ["geo_group", "countries", "geo_value", "GLOBAL", "target_id", "6.1"], ["loc", [null, [15, 33], [15, 104]]]]], [], 5, null, ["loc", [null, [15, 12], [15, 191]]]], ["block", "link-to", ["sdg", "7", ["subexpr", "query-params", [], ["geo_group", "countries", "geo_value", "GLOBAL", "target_id", "7.1"], ["loc", [null, [16, 33], [16, 104]]]]], [], 6, null, ["loc", [null, [16, 12], [16, 192]]]], ["block", "link-to", ["sdg", "11", ["subexpr", "query-params", [], ["geo_group", "cities", "geo_value", "GLOBAL_CITIES", "target_id", "11.1"], ["loc", [null, [17, 34], [17, 110]]]]], [], 7, null, ["loc", [null, [17, 12], [17, 199]]]], ["block", "link-to", ["sdg", "11", ["subexpr", "query-params", [], ["geo_group", "cities", "geo_value", "city_BOGOTA", "target_id", "11.1"], ["loc", [null, [18, 34], [18, 108]]]]], [], 8, null, ["loc", [null, [18, 12], [18, 197]]]], ["block", "link-to", ["sdg", "15", ["subexpr", "query-params", [], ["geo_group", "countries", "geo_value", "GLOBAL", "target_id", "15.1"], ["loc", [null, [19, 34], [19, 106]]]]], [], 9, null, ["loc", [null, [19, 12], [19, 171]]]], ["block", "link-to", ["video-player", ["subexpr", "query-params", [], ["src", "aehin"], ["loc", [null, [21, 38], [21, 64]]]]], [], 10, null, ["loc", [null, [21, 12], [21, 155]]]], ["content", "session.locale_label", ["loc", [null, [27, 6], [27, 30]]]], ["element", "action", ["changeLocale", "en"], [], ["loc", [null, [29, 16], [29, 47]]]], ["inline", "t", ["application.languages.en"], [], ["loc", [null, [29, 49], [29, 81]]]], ["element", "action", ["changeLocale", "es"], [], ["loc", [null, [30, 16], [30, 47]]]], ["inline", "t", ["application.languages.es"], [], ["loc", [null, [30, 49], [30, 81]]]], ["element", "action", ["changeLocale", "fr"], [], ["loc", [null, [31, 16], [31, 47]]]], ["inline", "t", ["application.languages.fr"], [], ["loc", [null, [31, 49], [31, 81]]]], ["element", "action", ["changeLocale", "ru"], [], ["loc", [null, [32, 16], [32, 47]]]], ["inline", "t", ["application.languages.ru"], [], ["loc", [null, [32, 49], [32, 81]]]]],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9, child10]
    };
  })());
});
efineday("sdg-dash/templates/-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 6
            },
            "end": {
              "line": 7,
              "column": 6
            }
          },
          "moduleName": "sdg-dash/templates/-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "brand-logo img-dp-shadow");
          dom.setAttribute(el1, "src", "images/landing/sdg-logo-only.png");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type", "multiple-nodes"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 20,
            "column": 15
          }
        },
        "moduleName": "sdg-dash/templates/-header.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" <div class=\"navbar navbar-default navbar-top sit-on-top\" role=\"navigation\"> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "navbar navbar-top sit-on-top");
        dom.setAttribute(el1, "role", "navigation");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container top-header");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "navbar-header");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "navbar-brand");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h5");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("      \n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "collapse navbar-collapse");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "nav navbar-nav navbar-right pad-top-10");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 1]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(element1, 1, 1);
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [3, 1]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3, 1]), 1, 1);
        morphs[3] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "link-to", ["sdg-overview"], ["class", "navbar-brand"], 0, null, ["loc", [null, [5, 6], [7, 20]]]], ["inline", "t", ["application.title"], [], ["loc", [null, [9, 12], [9, 39]]]], ["inline", "partial", ["-header-nav-right"], [], ["loc", [null, [14, 8], [14, 41]]]], ["content", "about-modal", ["loc", [null, [20, 0], [20, 15]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
efineday("sdg-dash/templates/-sdg-nav", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 2
            }
          },
          "moduleName": "sdg-dash/templates/-sdg-nav.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          var el2 = dom.createTextNode("Goal Progress");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element1, 'href');
          return morphs;
        },
        statements: [["attribute", "href", ["concat", [["get", "view.href", ["loc", [null, [3, 15], [3, 24]]]]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 2
            },
            "end": {
              "line": 7,
              "column": 2
            }
          },
          "moduleName": "sdg-dash/templates/-sdg-nav.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("a");
          var el2 = dom.createTextNode("Targets & Indicators");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'href');
          return morphs;
        },
        statements: [["attribute", "href", ["concat", [["get", "view.href", ["loc", [null, [6, 15], [6, 24]]]]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 5
          }
        },
        "moduleName": "sdg-dash/templates/-sdg-nav.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1, "class", "nav nav-tabs nav-justified");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element2, 1, 1);
        morphs[1] = dom.createMorphAt(element2, 2, 2);
        return morphs;
      },
      statements: [["block", "link-to", ["sdg.status", ["get", "this", ["loc", [null, [2, 26], [2, 30]]]]], ["tagName", "li"], 0, null, ["loc", [null, [2, 2], [4, 14]]]], ["block", "link-to", ["sdg.targets-indicators", ["get", "this", ["loc", [null, [5, 38], [5, 42]]]]], ["tagName", "li"], 1, null, ["loc", [null, [5, 2], [7, 14]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
efineday("sdg-dash/templates/components/liquid-bind", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 5,
                  "column": 4
                },
                "end": {
                  "line": 7,
                  "column": 4
                }
              },
              "moduleName": "sdg-dash/templates/components/liquid-bind.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["inline", "yield", [["get", "version", ["loc", [null, [6, 15], [6, 22]]]]], [], ["loc", [null, [6, 6], [6, 26]]]]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 7,
                  "column": 4
                },
                "end": {
                  "line": 9,
                  "column": 4
                }
              },
              "moduleName": "sdg-dash/templates/components/liquid-bind.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "version", ["loc", [null, [8, 6], [8, 20]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 11,
                "column": 0
              }
            },
            "moduleName": "sdg-dash/templates/components/liquid-bind.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [5, 11], [5, 19]]]]], [], 0, 1, ["loc", [null, [5, 4], [9, 12]]]]],
          locals: ["version"],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "sdg-dash/templates/components/liquid-bind.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "liquid-versions", [], ["value", ["subexpr", "@mut", [["get", "attrs.value", ["loc", [null, [2, 28], [2, 39]]]]], [], []], "use", ["subexpr", "@mut", [["get", "use", ["loc", [null, [2, 44], [2, 47]]]]], [], []], "outletName", ["subexpr", "@mut", [["get", "attrs.outletName", ["loc", [null, [3, 32], [3, 48]]]]], [], []], "name", "liquid-bind", "renderWhenFalse", true, "class", ["subexpr", "@mut", [["get", "class", ["loc", [null, [4, 67], [4, 72]]]]], [], []]], 0, null, ["loc", [null, [2, 2], [11, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.3.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 25,
                    "column": 6
                  },
                  "end": {
                    "line": 27,
                    "column": 6
                  }
                },
                "moduleName": "sdg-dash/templates/components/liquid-bind.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [["inline", "yield", [["get", "version", ["loc", [null, [26, 17], [26, 24]]]]], [], ["loc", [null, [26, 8], [26, 28]]]]],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.3.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 27,
                    "column": 6
                  },
                  "end": {
                    "line": 29,
                    "column": 6
                  }
                },
                "moduleName": "sdg-dash/templates/components/liquid-bind.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [["content", "version", ["loc", [null, [28, 8], [28, 22]]]]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 21,
                  "column": 4
                },
                "end": {
                  "line": 31,
                  "column": 4
                }
              },
              "moduleName": "sdg-dash/templates/components/liquid-bind.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [25, 13], [25, 21]]]]], [], 0, 1, ["loc", [null, [25, 6], [29, 14]]]]],
            locals: ["version"],
            templates: [child0, child1]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 13,
                "column": 2
              },
              "end": {
                "line": 32,
                "column": 2
              }
            },
            "moduleName": "sdg-dash/templates/components/liquid-bind.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "liquid-versions", [], ["value", ["subexpr", "@mut", [["get", "attrs.value", ["loc", [null, [21, 30], [21, 41]]]]], [], []], "notify", ["subexpr", "@mut", [["get", "container", ["loc", [null, [21, 49], [21, 58]]]]], [], []], "use", ["subexpr", "@mut", [["get", "use", ["loc", [null, [21, 63], [21, 66]]]]], [], []], "outletName", ["subexpr", "@mut", [["get", "attrs.outletName", ["loc", [null, [22, 34], [22, 50]]]]], [], []], "name", "liquid-bind", "renderWhenFalse", true], 0, null, ["loc", [null, [21, 4], [31, 26]]]]],
          locals: ["container"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 0
            },
            "end": {
              "line": 33,
              "column": 0
            }
          },
          "moduleName": "sdg-dash/templates/components/liquid-bind.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "liquid-container", [], ["id", ["subexpr", "@mut", [["get", "id", ["loc", [null, [14, 9], [14, 11]]]]], [], []], "class", ["subexpr", "@mut", [["get", "class", ["loc", [null, [15, 12], [15, 17]]]]], [], []], "growDuration", ["subexpr", "@mut", [["get", "growDuration", ["loc", [null, [16, 19], [16, 31]]]]], [], []], "growPixelsPerSecond", ["subexpr", "@mut", [["get", "growPixelsPerSecond", ["loc", [null, [17, 26], [17, 45]]]]], [], []], "growEasing", ["subexpr", "@mut", [["get", "growEasing", ["loc", [null, [18, 17], [18, 27]]]]], [], []], "enableGrowth", ["subexpr", "@mut", [["get", "enableGrowth", ["loc", [null, [19, 19], [19, 31]]]]], [], []]], 0, null, ["loc", [null, [13, 2], [32, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 34,
            "column": 0
          }
        },
        "moduleName": "sdg-dash/templates/components/liquid-bind.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "containerless", ["loc", [null, [1, 6], [1, 19]]]]], [], 0, 1, ["loc", [null, [1, 0], [33, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
efineday("sdg-dash/templates/components/liquid-container", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 14
          }
        },
        "moduleName": "sdg-dash/templates/components/liquid-container.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "yield", [["get", "this", ["loc", [null, [1, 8], [1, 12]]]]], [], ["loc", [null, [1, 0], [1, 14]]]]],
      locals: [],
      templates: []
    };
  })());
});
efineday("sdg-dash/templates/components/liquid-if", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 4,
                  "column": 4
                },
                "end": {
                  "line": 6,
                  "column": 4
                }
              },
              "moduleName": "sdg-dash/templates/components/liquid-if.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "yield", ["loc", [null, [5, 6], [5, 15]]]]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 4
                },
                "end": {
                  "line": 8,
                  "column": 4
                }
              },
              "moduleName": "sdg-dash/templates/components/liquid-if.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("      ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "yield", [], ["to", "inverse"], ["loc", [null, [7, 6], [7, 28]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 9,
                "column": 2
              }
            },
            "moduleName": "sdg-dash/templates/components/liquid-if.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "if", [["get", "valueVersion", ["loc", [null, [4, 10], [4, 22]]]]], [], 0, 1, ["loc", [null, [4, 4], [8, 11]]]]],
          locals: ["valueVersion"],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "sdg-dash/templates/components/liquid-if.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "liquid-versions", [], ["value", ["subexpr", "@mut", [["get", "showFirstBlock", ["loc", [null, [2, 27], [2, 41]]]]], [], []], "name", ["subexpr", "@mut", [["get", "helperName", ["loc", [null, [2, 47], [2, 57]]]]], [], []], "use", ["subexpr", "@mut", [["get", "use", ["loc", [null, [3, 27], [3, 30]]]]], [], []], "renderWhenFalse", ["subexpr", "hasBlock", ["inverse"], [], ["loc", [null, [3, 47], [3, 67]]]], "class", ["subexpr", "@mut", [["get", "class", ["loc", [null, [3, 74], [3, 79]]]]], [], []]], 0, null, ["loc", [null, [2, 2], [9, 22]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.3.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 21,
                    "column": 6
                  },
                  "end": {
                    "line": 23,
                    "column": 6
                  }
                },
                "moduleName": "sdg-dash/templates/components/liquid-if.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("        ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["content", "yield", ["loc", [null, [22, 8], [22, 17]]]]],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "fragmentReason": false,
                "revision": "Ember@2.3.0",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 23,
                    "column": 6
                  },
                  "end": {
                    "line": 25,
                    "column": 6
                  }
                },
                "moduleName": "sdg-dash/templates/components/liquid-if.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("        ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["inline", "yield", [], ["to", "inverse"], ["loc", [null, [24, 8], [24, 30]]]]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 19,
                  "column": 4
                },
                "end": {
                  "line": 26,
                  "column": 4
                }
              },
              "moduleName": "sdg-dash/templates/components/liquid-if.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "if", [["get", "valueVersion", ["loc", [null, [21, 12], [21, 24]]]]], [], 0, 1, ["loc", [null, [21, 6], [25, 13]]]]],
            locals: ["valueVersion"],
            templates: [child0, child1]
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 2
              },
              "end": {
                "line": 27,
                "column": 2
              }
            },
            "moduleName": "sdg-dash/templates/components/liquid-if.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "liquid-versions", [], ["value", ["subexpr", "@mut", [["get", "showFirstBlock", ["loc", [null, [19, 29], [19, 43]]]]], [], []], "notify", ["subexpr", "@mut", [["get", "container", ["loc", [null, [19, 51], [19, 60]]]]], [], []], "name", ["subexpr", "@mut", [["get", "helperName", ["loc", [null, [19, 66], [19, 76]]]]], [], []], "use", ["subexpr", "@mut", [["get", "use", ["loc", [null, [20, 8], [20, 11]]]]], [], []], "renderWhenFalse", ["subexpr", "hasBlock", ["inverse"], [], ["loc", [null, [20, 28], [20, 48]]]]], 0, null, ["loc", [null, [19, 4], [26, 24]]]]],
          locals: ["container"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 0
            },
            "end": {
              "line": 28,
              "column": 0
            }
          },
          "moduleName": "sdg-dash/templates/components/liquid-if.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "liquid-container", [], ["id", ["subexpr", "@mut", [["get", "id", ["loc", [null, [12, 9], [12, 11]]]]], [], []], "class", ["subexpr", "@mut", [["get", "class", ["loc", [null, [13, 12], [13, 17]]]]], [], []], "growDuration", ["subexpr", "@mut", [["get", "growDuration", ["loc", [null, [14, 19], [14, 31]]]]], [], []], "growPixelsPerSecond", ["subexpr", "@mut", [["get", "growPixelsPerSecond", ["loc", [null, [15, 26], [15, 45]]]]], [], []], "growEasing", ["subexpr", "@mut", [["get", "growEasing", ["loc", [null, [16, 17], [16, 27]]]]], [], []], "enableGrowth", ["subexpr", "@mut", [["get", "enableGrowth", ["loc", [null, [17, 19], [17, 31]]]]], [], []]], 0, null, ["loc", [null, [11, 2], [27, 23]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 29,
            "column": 0
          }
        },
        "moduleName": "sdg-dash/templates/components/liquid-if.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "containerless", ["loc", [null, [1, 6], [1, 19]]]]], [], 0, 1, ["loc", [null, [1, 0], [28, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
efineday("sdg-dash/templates/components/liquid-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 6,
                "column": 2
              }
            },
            "moduleName": "sdg-dash/templates/components/liquid-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "role", "dialog");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(4);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createAttrMorph(element0, 'aria-labelledby');
            morphs[2] = dom.createAttrMorph(element0, 'aria-label');
            morphs[3] = dom.createMorphAt(element0, 1, 1);
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["lf-dialog ", ["get", "cc.options.dialogClass", ["loc", [null, [3, 28], [3, 50]]]]]]], ["attribute", "aria-labelledby", ["get", "cc.options.ariaLabelledBy", ["loc", [null, [3, 86], [3, 111]]]]], ["attribute", "aria-label", ["get", "cc.options.ariaLabel", ["loc", [null, [3, 127], [3, 147]]]]], ["inline", "lf-vue", [["get", "cc.view", ["loc", [null, [4, 15], [4, 22]]]]], ["dismiss", "dismiss"], ["loc", [null, [4, 6], [4, 42]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type", "multiple-nodes"]
          },
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "sdg-dash/templates/components/liquid-modal.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "lm-container", [], ["action", "escape", "clickAway", "outsideClick"], 0, null, ["loc", [null, [2, 2], [6, 19]]]], ["content", "lf-overlay", ["loc", [null, [7, 2], [7, 16]]]]],
        locals: ["cc"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "sdg-dash/templates/components/liquid-modal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "liquid-versions", [], ["name", "liquid-modal", "value", ["subexpr", "@mut", [["get", "currentContext", ["loc", [null, [1, 45], [1, 59]]]]], [], []], "renderWhenFalse", false], 0, null, ["loc", [null, [1, 0], [8, 20]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
efineday("sdg-dash/templates/components/liquid-outlet", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 15,
                  "column": 6
                },
                "end": {
                  "line": 17,
                  "column": 6
                }
              },
              "moduleName": "sdg-dash/templates/components/liquid-outlet.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["inline", "outlet", [["get", "outletName", ["loc", [null, [16, 17], [16, 27]]]]], [], ["loc", [null, [16, 8], [16, 29]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 19,
                "column": 2
              }
            },
            "moduleName": "sdg-dash/templates/components/liquid-outlet.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "set-outlet-state", [["get", "outletName", ["loc", [null, [15, 26], [15, 36]]]], ["get", "version.outletState", ["loc", [null, [15, 37], [15, 56]]]]], [], 0, null, ["loc", [null, [15, 6], [17, 28]]]]],
          locals: ["version"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 20,
              "column": 0
            }
          },
          "moduleName": "sdg-dash/templates/components/liquid-outlet.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "liquid-bind", [["get", "outletState", ["loc", [null, [2, 17], [2, 28]]]]], ["id", ["subexpr", "@mut", [["get", "id", ["loc", [null, [3, 9], [3, 11]]]]], [], []], "class", ["subexpr", "@mut", [["get", "class", ["loc", [null, [4, 12], [4, 17]]]]], [], []], "use", ["subexpr", "@mut", [["get", "use", ["loc", [null, [5, 10], [5, 13]]]]], [], []], "name", "liquid-outlet", "outletName", ["subexpr", "@mut", [["get", "outletName", ["loc", [null, [7, 17], [7, 27]]]]], [], []], "containerless", ["subexpr", "@mut", [["get", "containerless", ["loc", [null, [8, 20], [8, 33]]]]], [], []], "growDuration", ["subexpr", "@mut", [["get", "growDuration", ["loc", [null, [9, 19], [9, 31]]]]], [], []], "growPixelsPerSecond", ["subexpr", "@mut", [["get", "growPixelsPerSecond", ["loc", [null, [10, 26], [10, 45]]]]], [], []], "growEasing", ["subexpr", "@mut", [["get", "growEasing", ["loc", [null, [11, 17], [11, 27]]]]], [], []], "enableGrowth", ["subexpr", "@mut", [["get", "enableGrowth", ["loc", [null, [12, 19], [12, 31]]]]], [], []]], 0, null, ["loc", [null, [2, 2], [19, 20]]]]],
        locals: ["outletState"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 0
          }
        },
        "moduleName": "sdg-dash/templates/components/liquid-outlet.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "get-outlet-state", [["get", "outletName", ["loc", [null, [1, 21], [1, 31]]]]], [], 0, null, ["loc", [null, [1, 0], [20, 21]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
efineday("sdg-dash/templates/components/liquid-versions", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 3,
                  "column": 4
                },
                "end": {
                  "line": 5,
                  "column": 4
                }
              },
              "moduleName": "sdg-dash/templates/components/liquid-versions.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["inline", "yield", [["get", "version.value", ["loc", [null, [4, 14], [4, 27]]]]], [], ["loc", [null, [4, 6], [4, 31]]]]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 6,
                "column": 2
              }
            },
            "moduleName": "sdg-dash/templates/components/liquid-versions.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "liquid-child", [], ["version", ["subexpr", "@mut", [["get", "version", ["loc", [null, [3, 28], [3, 35]]]]], [], []], "liquidChildDidRender", "childDidRender", "class", ["subexpr", "@mut", [["get", "class", ["loc", [null, [3, 80], [3, 85]]]]], [], []]], 0, null, ["loc", [null, [3, 4], [5, 21]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "sdg-dash/templates/components/liquid-versions.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "version.shouldRender", ["loc", [null, [2, 8], [2, 28]]]]], [], 0, null, ["loc", [null, [2, 2], [6, 9]]]]],
        locals: ["version"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "sdg-dash/templates/components/liquid-versions.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "each", [["get", "versions", ["loc", [null, [1, 8], [1, 16]]]]], ["key", "@identity"], 0, null, ["loc", [null, [1, 0], [7, 9]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
efineday("sdg-dash/templates/components/liquid-with", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 2
              },
              "end": {
                "line": 4,
                "column": 2
              }
            },
            "moduleName": "sdg-dash/templates/components/liquid-with.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "version", ["loc", [null, [3, 13], [3, 20]]]]], [], ["loc", [null, [3, 4], [3, 24]]]]],
          locals: ["version"],
          templates: []
        };
      })();
      return {
        meta: {
          "fragmentReason": {
            "name": "missing-wrapper",
            "problems": ["wrong-type"]
          },
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "sdg-dash/templates/components/liquid-with.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "liquid-versions", [], ["value", ["subexpr", "@mut", [["get", "attrs.value", ["loc", [null, [2, 28], [2, 39]]]]], [], []], "use", ["subexpr", "@mut", [["get", "use", ["loc", [null, [2, 44], [2, 47]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [2, 53], [2, 57]]]]], [], []], "class", ["subexpr", "@mut", [["get", "class", ["loc", [null, [2, 64], [2, 69]]]]], [], []]], 0, null, ["loc", [null, [2, 2], [4, 23]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "fragmentReason": false,
              "revision": "Ember@2.3.0",
              "loc": {
                "source": null,
                "start": {
                  "line": 14,
                  "column": 4
                },
                "end": {
                  "line": 16,
                  "column": 4
                }
              },
              "moduleName": "sdg-dash/templates/components/liquid-with.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["inline", "yield", [["get", "version", ["loc", [null, [15, 15], [15, 22]]]]], [], ["loc", [null, [15, 6], [15, 26]]]]],
            locals: ["version"],
            templates: []
          };
        })();
        return {
          meta: {
            "fragmentReason": false,
            "revision": "Ember@2.3.0",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 2
              },
              "end": {
                "line": 17,
                "column": 2
              }
            },
            "moduleName": "sdg-dash/templates/components/liquid-with.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "liquid-versions", [], ["value", ["subexpr", "@mut", [["get", "attrs.value", ["loc", [null, [14, 30], [14, 41]]]]], [], []], "notify", ["subexpr", "@mut", [["get", "container", ["loc", [null, [14, 49], [14, 58]]]]], [], []], "use", ["subexpr", "@mut", [["get", "use", ["loc", [null, [14, 63], [14, 66]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [14, 72], [14, 76]]]]], [], []]], 0, null, ["loc", [null, [14, 4], [16, 25]]]]],
          locals: ["container"],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "fragmentReason": false,
          "revision": "Ember@2.3.0",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 0
            },
            "end": {
              "line": 18,
              "column": 0
            }
          },
          "moduleName": "sdg-dash/templates/components/liquid-with.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "liquid-container", [], ["id", ["subexpr", "@mut", [["get", "id", ["loc", [null, [7, 9], [7, 11]]]]], [], []], "class", ["subexpr", "@mut", [["get", "class", ["loc", [null, [8, 12], [8, 17]]]]], [], []], "growDuration", ["subexpr", "@mut", [["get", "growDuration", ["loc", [null, [9, 19], [9, 31]]]]], [], []], "growPixelsPerSecond", ["subexpr", "@mut", [["get", "growPixelsPerSecond", ["loc", [null, [10, 26], [10, 45]]]]], [], []], "growEasing", ["subexpr", "@mut", [["get", "growEasing", ["loc", [null, [11, 17], [11, 27]]]]], [], []], "enableGrowth", ["subexpr", "@mut", [["get", "enableGrowth", ["loc", [null, [12, 19], [12, 31]]]]], [], []]], 0, null, ["loc", [null, [6, 2], [17, 23]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "fragmentReason": {
          "name": "missing-wrapper",
          "problems": ["wrong-type"]
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "sdg-dash/templates/components/liquid-with.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "containerless", ["loc", [null, [1, 6], [1, 19]]]]], [], 0, 1, ["loc", [null, [1, 0], [18, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
efineday('sdg-dash/torii-adapters/application', ['exports', 'sdg-dash/torii-adapters/arcgis-oauth-bearer'], function (exports, _sdgDashToriiAdaptersArcgisOauthBearer) {
  exports['default'] = _sdgDashToriiAdaptersArcgisOauthBearer['default'];
});
efineday('sdg-dash/torii-adapters/arcgis-oauth-bearer', ['exports', 'ember', 'sdg-dash/config/environment'], function (exports, _ember, _sdgDashConfigEnvironment) {
  exports['default'] = _ember['default'].Object.extend({

    authCookieName: 'esri_auth',

    portalBaseUrl: 'https://www.arcgis.com/',

    signoutUrl: _ember['default'].computed('portalBaseUrl', function () {
      return this.get('portalBaseUrl') + '/sharing/rest/oauth2/signout?redirect_uri=' + window.location.protocol + '//' + window.location.host + _sdgDashConfigEnvironment['default'].baseURL;
    }),

    /**
     * Initialize the adapter
     * As it starts up we basically check for various configuration
     * options, and update the defaults
     */
    init: function init() {
      if (_sdgDashConfigEnvironment['default'].APP.authCookieName) {
        this.set('authCookieName', _sdgDashConfigEnvironment['default'].APP.authCookieName);
      }
      //Unless working against a portal instance, this can be left as the default
      if (_sdgDashConfigEnvironment['default'].APP.portalBaseUrl) {
        this.set('portalBaseUrl', _sdgDashConfigEnvironment['default'].APP.portalBaseUrl);
      } else {
        _ember['default'].warn('ENV.APP.portalBaseUrl not defined. Defaulting to https://www.arcgis.com');
      }
    },

    /**
     * Open a session by fetching portal/self from
     * the portal
     */
    open: function open(authentication) {
      var _this = this;

      var token = authentication.authorizationToken.token;
      var expires = Date.now() + authentication.authorizationToken.expires_in * 1000; //seconds from now

      _ember['default'].debug('torii:adapter:arcgis-oauth-bearer:open token...' + token);
      var portalSelfUrl = this.get('portalBaseUrl') + '/sharing/rest/portals/self?f=json&token=' + token;

      var signoutUrl = this.get('signoutUrl');
      // Ember.debug('signoutUrl ' + signoutUrl);
      //now use the token to call portal self
      return new _ember['default'].RSVP.Promise(function (resolve, reject) {
        _ember['default'].debug('torii:adapter:arcgis-oauth-bearer:open making portal/self call...');
        _ember['default'].$.ajax({
          url: portalSelfUrl,
          dataType: 'json',
          success: _ember['default'].run.bind(null, resolve),
          error: _ember['default'].run.bind(null, reject)
        });
      }).then(function (portal) {
        _ember['default'].debug('torii:adapter:arcgis-oauth-bearer:open got response from portal/self & assigning to session');
        // The returned object is merged onto the session (basically).

        //separate the portal and user so they are separate props on the session object
        var user = portal.user;
        delete portal.user;

        //TODO find a cleaner means to handle this iframe jiggery pokery
        if (!_sdgDashConfigEnvironment['default'].torii.providers['arcgis-oauth-bearer'].display || _sdgDashConfigEnvironment['default'].torii.providers['arcgis-oauth-bearer'].display != 'iframe') {
          //basically - if we are not using the iframe, we need to handle the
          //login persistence ourselves so cook up an object and stuff it
          //in localStorage
          var cookieData = _this._createCookieData(token, expires, user, portal);
          _this._store('torii-provider-arcgis', cookieData);
        }

        return {
          portal: portal,
          currentUser: user,
          token: token,
          signoutUrl: signoutUrl
        };
      });
    },

    /**
     * Close a session (aka log out the user)
     */
    close: function close() {
      return new _ember['default'].RSVP.Promise(function (resolve, reject) {
        //always nuke the localStorage things
        if (window.localStorage) {
          window.localStorage.removeItem('torii-provider-arcgis');
        }
        //TODO find a cleaner means to handle this iframe jiggery pokery
        if (_sdgDashConfigEnvironment['default'].torii.providers['arcgis-oauth-bearer'].display && _sdgDashConfigEnvironment['default'].torii.providers['arcgis-oauth-bearer'].display === 'iframe') {
          throw new Error('To log out of ArcGIS Online, you should redirect the browser to ' + this.get('signoutUrl'));
        }
        resolve();
      });
    },

    /**
     * Rehydrate a session by looking for the esri_auth cookie
     */
    fetch: function fetch() {
      var self = this;
      return new _ember['default'].RSVP.Promise(function (resolve, reject) {
        //try for a cookie...
        var result = self._checkCookie(self.get('authCookieName'));
        //failing that look in localStorage
        if (!result.valid) {
          result = self._checkLocalStorage('torii-provider-arcgis');
        }

        if (result.valid) {
          //degate to the ope function to do the work...
          _ember['default'].debug('Fetch has valid cookie... opening session...');

          //calcuate expires_in based on current timestamp
          var now = Date.now();
          var expires_in = (result.authData.expires - now) / 1000;

          //create the expected object for open
          var authData = {
            authorizationToken: {
              token: result.authData.token,
              expires_in: expires_in
            }
          };
          resolve(self.open(authData));
        } else {
          _ember['default'].debug('Fetch did not get a cookie... rejecting');
          reject();
        }
      });
    },

    /**
     * Checks local storage for auth data
     */
    _checkLocalStorage: function _checkLocalStorage(keyName) {
      _ember['default'].debug('torii:adapter:arcgis-oauth-bearer:checkLocalStorage keyName ' + keyName);
      var result = {
        valid: false
      };
      if (window.localStorage) {
        var stored = window.localStorage.getItem(keyName);
        if (stored) {
          result.authData = JSON.parse(stored);
        }
        if (new Date(result.authData.expires) > new Date()) {
          _ember['default'].debug('torii:adapter:arcgis-oauth-bearer:checkLocalStorage authdata has not expired yet ');
          result.valid = true;
        }
      }
      return result;
    },

    /**
     * Stores auth data in local storage
     */
    _store: function _store(keyName, object) {
      if (window.localStorage) {
        window.localStorage.setItem(keyName, JSON.stringify(object));
      }
    },

    /**
     * Helper to ensure consisten serialization
     */
    _createCookieData: function _createCookieData(token, expires, user, portal) {
      var data = {
        token: token,
        accountId: user.orgId,
        create: user.created,
        culture: user.culture,
        customBaseUrl: portal.customBaseUrl,
        email: user.username,
        expires: expires,
        persistent: false,
        region: user.region,
        role: user.role
      };
      return data;
    },

    /**
     * Check for and validate a cookie by name
     */
    _checkCookie: function _checkCookie(cookieName) {
      var result = {
        valid: false
      };

      var cookieString = decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(cookieName).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;

      if (cookieString) {
        _ember['default'].debug('torii:adapter:arcgis-oauth-bearer:checkCookie: Found cookie...');
        //parse it
        var cookieData = JSON.parse(cookieString);
        //check if it has expired
        if (new Date(cookieData.expires) > new Date()) {
          //ok it's still valid... we still don't know if
          //it is valid for the env we are working with
          //but we will return it
          _ember['default'].debug('torii:adapter:arcgis-oauth-bearer:checkCookie: cookie has not expired yet...');
          result.authData = cookieData;
          result.valid = true;
        } else {
          _ember['default'].debug('torii:adapter:arcgis-oauth-bearer:checkCookie: cookie has expired.');
        }
      }
      return result;
    }

  });
});
efineday('sdg-dash/torii-providers/arcgis-oauth-bearer', ['exports', 'torii/providers/oauth2-bearer', 'torii/configuration'], function (exports, _toriiProvidersOauth2Bearer, _toriiConfiguration) {

  var ArcGISOAuth = _toriiProvidersOauth2Bearer['default'].extend({
    name: 'arcgis-oauth-bearer',

    //Allow the portalUrl to be passed in, but default to ago
    portalUrl: (0, _toriiConfiguration.configurable)('portalUrl', 'https://www.arcgis.com'),

    //construct the authorize end-point url based on the portalUrl
    baseUrl: (0, _toriiConfiguration.configurable)('baseUrl', function () {
      return this.get('portalUrl') + '/sharing/oauth2/authorize';
    }),

    showSocialLogins: (0, _toriiConfiguration.configurable)('showSocialLogins', false),

    display: (0, _toriiConfiguration.configurable)('display', 'default'),

    expiration: (0, _toriiConfiguration.configurable)('expiration', 20160),

    //These params must be present in on the provider
    requiredUrlParams: ['response_type', 'showSocialLogins', 'display', 'expiration'],
    // additional params that this provider accepts
    optionalUrlParams: ['client', 'parent'],
    //params the provider will extract from the redirected url
    responseParams: ['token', 'state', 'expires_in'],

    /**
     * shows the pop-up/iframe - we override the base implementation so
     * we can merge the passed in options into the object before we show
     * the login
     */
    open: function open(options) {
      options = options || {};

      if (this.get('display') === 'iframe') {
        //if we are using an iframe, we need to set the parent to the current domain
        options.parent = window.location.protocol + '//' + window.location.hostname;
      }

      //since we want any passed in options to map up to the optional params...
      this.setProperties(options);

      var name = this.get('name'),
          url = this.buildUrl(),
          redirectUri = this.get('redirectUri'),
          responseParams = this.get('responseParams');

      return this.get('popup').open(url, responseParams, options).then(function (authData) {
        var missingResponseParams = [];

        responseParams.forEach(function (param) {
          if (authData[param] === undefined) {
            missingResponseParams.push(param);
          }
        });

        if (missingResponseParams.length) {
          throw new Error("The response from the provider is missing " + "these required response params: " + missingResponseParams.join(', '));
        }

        return {
          authorizationToken: authData,
          provider: name,
          redirectUri: redirectUri
        };
      });
    }

  });

  exports['default'] = ArcGISOAuth;
});
/**
 * arcgis-oauth.js
 *
 * torii provider that works with ArcGIS.com oauth
 */
efineday("sdg-dash/transitions/cross-fade", ["exports", "liquid-fire"], function (exports, _liquidFire) {
  exports["default"] = crossFade;

  function crossFade() {
    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    (0, _liquidFire.stop)(this.oldElement);
    return _liquidFire.Promise.all([(0, _liquidFire.animate)(this.oldElement, { opacity: 0 }, opts), (0, _liquidFire.animate)(this.newElement, { opacity: [opts.maxOpacity || 1, 0] }, opts)]);
  }

  // END-SNIPPET
});
// BEGIN-SNIPPET cross-fade-definition
efineday("sdg-dash/transitions/default", ["exports", "liquid-fire"], function (exports, _liquidFire) {
  exports["default"] = defaultTransition;

  // This is what we run when no animation is asked for. It just sets
  // the newly-added element to visible (because we always start them
  // out invisible so that transitions can control their initial
  // appearance).

  function defaultTransition() {
    if (this.newElement) {
      this.newElement.css({ visibility: '' });
    }
    return _liquidFire.Promise.resolve();
  }
});
efineday("sdg-dash/transitions/explode", ["exports", "ember", "liquid-fire"], function (exports, _ember, _liquidFire) {
  exports["default"] = explode;

  // Explode is not, by itself, an animation. It exists to pull apart
  // other elements so that each of the pieces can be targeted by
  // animations.

  function explode() {
    var _this = this;

    var seenElements = {};
    var sawBackgroundPiece = false;

    for (var _len = arguments.length, pieces = Array(_len), _key = 0; _key < _len; _key++) {
      pieces[_key] = arguments[_key];
    }

    var promises = pieces.map(function (piece) {
      if (piece.matchBy) {
        return matchAndExplode(_this, piece, seenElements);
      } else if (piece.pick || piece.pickOld || piece.pickNew) {
        return explodePiece(_this, piece, seenElements);
      } else {
        sawBackgroundPiece = true;
        return runAnimation(_this, piece);
      }
    });
    if (!sawBackgroundPiece) {
      if (this.newElement) {
        this.newElement.css({ visibility: '' });
      }
      if (this.oldElement) {
        this.oldElement.css({ visibility: 'hidden' });
      }
    }
    return _liquidFire.Promise.all(promises);
  }

  function explodePiece(context, piece, seen) {
    var childContext = _ember["default"].copy(context);
    var selectors = [piece.pickOld || piece.pick, piece.pickNew || piece.pick];
    var cleanupOld, cleanupNew;

    if (selectors[0] || selectors[1]) {
      cleanupOld = _explodePart(context, 'oldElement', childContext, selectors[0], seen);
      cleanupNew = _explodePart(context, 'newElement', childContext, selectors[1], seen);
      if (!cleanupOld && !cleanupNew) {
        return _liquidFire.Promise.resolve();
      }
    }

    return runAnimation(childContext, piece)["finally"](function () {
      if (cleanupOld) {
        cleanupOld();
      }
      if (cleanupNew) {
        cleanupNew();
      }
    });
  }

  function _explodePart(context, field, childContext, selector, seen) {
    var child, childOffset, width, height, newChild;
    var elt = context[field];

    childContext[field] = null;
    if (elt && selector) {
      child = elt.find(selector).filter(function () {
        var guid = _ember["default"].guidFor(this);
        if (!seen[guid]) {
          seen[guid] = true;
          return true;
        }
      });
      if (child.length > 0) {
        childOffset = child.offset();
        width = child.outerWidth();
        height = child.outerHeight();
        newChild = child.clone();

        // Hide the original element
        child.css({ visibility: 'hidden' });

        // If the original element's parent was hidden, hide our clone
        // too.
        if (elt.css('visibility') === 'hidden') {
          newChild.css({ visibility: 'hidden' });
        }
        newChild.appendTo(elt.parent());
        newChild.outerWidth(width);
        newChild.outerHeight(height);
        var newParentOffset = newChild.offsetParent().offset();
        newChild.css({
          position: 'absolute',
          top: childOffset.top - newParentOffset.top,
          left: childOffset.left - newParentOffset.left,
          margin: 0
        });

        // Pass the clone to the next animation
        childContext[field] = newChild;
        return function cleanup() {
          newChild.remove();
          child.css({ visibility: '' });
        };
      }
    }
  }

  function animationFor(context, piece) {
    var name, args, func;
    if (!piece.use) {
      throw new Error("every argument to the 'explode' animation must include a followup animation to 'use'");
    }
    if (_ember["default"].isArray(piece.use)) {
      name = piece.use[0];
      args = piece.use.slice(1);
    } else {
      name = piece.use;
      args = [];
    }
    if (typeof name === 'function') {
      func = name;
    } else {
      func = context.lookup(name);
    }
    return function () {
      return _liquidFire.Promise.resolve(func.apply(this, args));
    };
  }

  function runAnimation(context, piece) {
    return new _liquidFire.Promise(function (resolve, reject) {
      animationFor(context, piece).apply(context).then(resolve, reject);
    });
  }

  function matchAndExplode(context, piece, seen) {
    if (!context.oldElement || !context.newElement) {
      return _liquidFire.Promise.resolve();
    }

    // reduce the matchBy scope
    if (piece.pick) {
      context.oldElement = context.oldElement.find(piece.pick);
      context.newElement = context.newElement.find(piece.pick);
    }

    if (piece.pickOld) {
      context.oldElement = context.oldElement.find(piece.pickOld);
    }

    if (piece.pickNew) {
      context.newElement = context.newElement.find(piece.pickNew);
    }

    // use the fastest selector available
    var selector;

    if (piece.matchBy === 'id') {
      selector = function (attrValue) {
        return "#" + attrValue;
      };
    } else if (piece.matchBy === 'class') {
      selector = function (attrValue) {
        return "." + attrValue;
      };
    } else {
      selector = function (attrValue) {
        var escapedAttrValue = attrValue.replace(/'/g, "\\'");
        return "[" + piece.matchBy + "='" + escapedAttrValue + "']";
      };
    }

    var hits = _ember["default"].A(context.oldElement.find("[" + piece.matchBy + "]").toArray());
    return _liquidFire.Promise.all(hits.map(function (elt) {
      var attrValue = _ember["default"].$(elt).attr(piece.matchBy);

      // if there is no match for a particular item just skip it
      if (attrValue === "" || context.newElement.find(selector(attrValue)).length === 0) {
        return _liquidFire.Promise.resolve();
      }

      return explodePiece(context, {
        pick: selector(attrValue),
        use: piece.use
      }, seen);
    }));
  }
});
efineday('sdg-dash/transitions/fade', ['exports', 'liquid-fire'], function (exports, _liquidFire) {
  exports['default'] = fade;

  function fade() {
    var _this = this;

    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var firstStep;
    var outOpts = opts;
    var fadingElement = findFadingElement(this);

    if (fadingElement) {
      // We still have some older version that is in the process of
      // fading out, so out first step is waiting for it to finish.
      firstStep = (0, _liquidFire.finish)(fadingElement, 'fade-out');
    } else {
      if ((0, _liquidFire.isAnimating)(this.oldElement, 'fade-in')) {
        // if the previous view is partially faded in, scale its
        // fade-out duration appropriately.
        outOpts = { duration: (0, _liquidFire.timeSpent)(this.oldElement, 'fade-in') };
      }
      (0, _liquidFire.stop)(this.oldElement);
      firstStep = (0, _liquidFire.animate)(this.oldElement, { opacity: 0 }, outOpts, 'fade-out');
    }
    return firstStep.then(function () {
      return (0, _liquidFire.animate)(_this.newElement, { opacity: [opts.maxOpacity || 1, 0] }, opts, 'fade-in');
    });
  }

  function findFadingElement(context) {
    for (var i = 0; i < context.older.length; i++) {
      var entry = context.older[i];
      if ((0, _liquidFire.isAnimating)(entry.element, 'fade-out')) {
        return entry.element;
      }
    }
    if ((0, _liquidFire.isAnimating)(context.oldElement, 'fade-out')) {
      return context.oldElement;
    }
  }
  // END-SNIPPET
});
// BEGIN-SNIPPET fade-definition
efineday('sdg-dash/transitions/flex-grow', ['exports', 'liquid-fire'], function (exports, _liquidFire) {
  exports['default'] = flexGrow;

  function flexGrow(opts) {
    (0, _liquidFire.stop)(this.oldElement);
    return _liquidFire.Promise.all([(0, _liquidFire.animate)(this.oldElement, { 'flex-grow': 0 }, opts), (0, _liquidFire.animate)(this.newElement, { 'flex-grow': [1, 0] }, opts)]);
  }
});
efineday('sdg-dash/transitions/fly-to', ['exports', 'liquid-fire'], function (exports, _liquidFire) {
  exports['default'] = flyTo;

  function flyTo() {
    var _this = this;

    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    if (!this.newElement) {
      return _liquidFire.Promise.resolve();
    } else if (!this.oldElement) {
      this.newElement.css({ visibility: '' });
      return _liquidFire.Promise.resolve();
    }

    var oldOffset = this.oldElement.offset();
    var newOffset = this.newElement.offset();

    if (opts.movingSide === 'new') {
      var motion = {
        translateX: [0, oldOffset.left - newOffset.left],
        translateY: [0, oldOffset.top - newOffset.top],
        outerWidth: [this.newElement.outerWidth(), this.oldElement.outerWidth()],
        outerHeight: [this.newElement.outerHeight(), this.oldElement.outerHeight()]
      };
      this.oldElement.css({ visibility: 'hidden' });
      return (0, _liquidFire.animate)(this.newElement, motion, opts);
    } else {
      var motion = {
        translateX: newOffset.left - oldOffset.left,
        translateY: newOffset.top - oldOffset.top,
        outerWidth: this.newElement.outerWidth(),
        outerHeight: this.newElement.outerHeight()
      };
      this.newElement.css({ visibility: 'hidden' });
      return (0, _liquidFire.animate)(this.oldElement, motion, opts).then(function () {
        _this.newElement.css({ visibility: '' });
      });
    }
  }
});
efineday('sdg-dash/transitions/move-over', ['exports', 'liquid-fire'], function (exports, _liquidFire) {
  exports['default'] = moveOver;

  function moveOver(dimension, direction, opts) {
    var _this = this;

    var oldParams = {},
        newParams = {},
        firstStep,
        property,
        measure;

    if (dimension.toLowerCase() === 'x') {
      property = 'translateX';
      measure = 'width';
    } else {
      property = 'translateY';
      measure = 'height';
    }

    if ((0, _liquidFire.isAnimating)(this.oldElement, 'moving-in')) {
      firstStep = (0, _liquidFire.finish)(this.oldElement, 'moving-in');
    } else {
      (0, _liquidFire.stop)(this.oldElement);
      firstStep = _liquidFire.Promise.resolve();
    }

    return firstStep.then(function () {
      var bigger = biggestSize(_this, measure);
      oldParams[property] = bigger * direction + 'px';
      newParams[property] = ["0px", -1 * bigger * direction + 'px'];

      return _liquidFire.Promise.all([(0, _liquidFire.animate)(_this.oldElement, oldParams, opts), (0, _liquidFire.animate)(_this.newElement, newParams, opts, 'moving-in')]);
    });
  }

  function biggestSize(context, dimension) {
    var sizes = [];
    if (context.newElement) {
      sizes.push(parseInt(context.newElement.css(dimension), 10));
      sizes.push(parseInt(context.newElement.parent().css(dimension), 10));
    }
    if (context.oldElement) {
      sizes.push(parseInt(context.oldElement.css(dimension), 10));
      sizes.push(parseInt(context.oldElement.parent().css(dimension), 10));
    }
    return Math.max.apply(null, sizes);
  }
});
efineday("sdg-dash/transitions/scale", ["exports", "liquid-fire"], function (exports, _liquidFire) {
  exports["default"] = scale;

  function scale() {
    var _this = this;

    var opts = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return (0, _liquidFire.animate)(this.oldElement, { scale: [0.2, 1] }, opts).then(function () {
      return (0, _liquidFire.animate)(_this.newElement, { scale: [1, 0.2] }, opts);
    });
  }
});
efineday("sdg-dash/transitions/scroll-then", ["exports", "ember", "liquid-fire/is-browser"], function (exports, _ember, _liquidFireIsBrowser) {
  exports["default"] = function (nextTransitionName, options) {
    for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      rest[_key - 2] = arguments[_key];
    }

    var _this = this;

    if ((0, _liquidFireIsBrowser["default"])()) {
      _ember["default"].assert("You must provide a transition name as the first argument to scrollThen. Example: this.use('scrollThen', 'toLeft')", 'string' === typeof nextTransitionName);

      var el = document.getElementsByTagName('html');
      var nextTransition = this.lookup(nextTransitionName);
      if (!options) {
        options = {};
      }

      _ember["default"].assert("The second argument to scrollThen is passed to Velocity's scroll function and must be an object", 'object' === typeof options);

      // set scroll options via: this.use('scrollThen', 'ToLeft', {easing: 'spring'})
      options = _ember["default"].merge({ duration: 500, offset: 0 }, options);

      // additional args can be passed through after the scroll options object
      // like so: this.use('scrollThen', 'moveOver', {duration: 100}, 'x', -1);

      return window.$.Velocity(el, 'scroll', options).then(function () {
        nextTransition.apply(_this, rest);
      });
    }
  };
});
efineday("sdg-dash/transitions/to-down", ["exports", "sdg-dash/transitions/move-over"], function (exports, _sdgDashTransitionsMoveOver) {
  exports["default"] = function (opts) {
    return _sdgDashTransitionsMoveOver["default"].call(this, 'y', 1, opts);
  };
});
efineday("sdg-dash/transitions/to-left", ["exports", "sdg-dash/transitions/move-over"], function (exports, _sdgDashTransitionsMoveOver) {
  exports["default"] = function (opts) {
    return _sdgDashTransitionsMoveOver["default"].call(this, 'x', -1, opts);
  };
});
efineday("sdg-dash/transitions/to-right", ["exports", "sdg-dash/transitions/move-over"], function (exports, _sdgDashTransitionsMoveOver) {
  exports["default"] = function (opts) {
    return _sdgDashTransitionsMoveOver["default"].call(this, 'x', 1, opts);
  };
});
efineday("sdg-dash/transitions/to-up", ["exports", "sdg-dash/transitions/move-over"], function (exports, _sdgDashTransitionsMoveOver) {
  exports["default"] = function (opts) {
    return _sdgDashTransitionsMoveOver["default"].call(this, 'y', -1, opts);
  };
});
efineday('sdg-dash/transitions/wait', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = function (ms) {
    var _this = this;

    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    return new _ember['default'].RSVP.Promise(function (resolve) {
      setTimeout(function () {
        resolve(_this.lookup(opts.then || 'default').call(_this));
      }, ms);
    });
  };
});
efineday('sdg-dash/transitions', ['exports'], function (exports) {
  // Copyright 2016 Esri.
  //
  // Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
  // You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
  //
  // Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
  // "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
  // language governing permissions and limitations under the License.

  exports['default'] = function () {
    this.transition(this.fromRoute('landing'), this.toRoute('sdg-overview'), this.use('fade'), this.reverse('fade'));

    this.transition(this.fromRoute('landing'), this.toRoute('map-overview'), this.use('fade'), this.reverse('fade'));

    this.transition(this.fromRoute('sdg-overview'), this.toRoute('sdg'), this.use('fade'), this.reverse('fade'));
  };
});
efineday('sdg-dash/utils/arcgis-map-utils', ['exports', 'ember'], function (exports, _ember) {
  exports._startSpin = _startSpin;
  exports._stopSpin = _stopSpin;
  exports._doSpin = _doSpin;

  // from http://preventas.maps.arcgis.com/apps/3DViz/index.html?appid=ce5e3e632bb24f029098a07765b71b63
  // 3D Scene with Esri JSAPI v4 - Auto Globa Spin
  // start spin

  function _startSpin() {
    this._stopSpin();
    this.spinTimer = setInterval(lang.hitch(this, this._doSpin), 100);
  }

  // stop spin

  function _stopSpin() {
    if (this.spinTimer) {
      clearInterval(this.spinTimer);
      this.spinTimer = null;
    }
  }

  // do spin

  function _doSpin() {
    var pos = this.view.camera.position;
    var posGeo = webMercatorUtils.webMercatorToGeographic(pos);
    var posX = posGeo.x - 1;
    if (posX <= -180) {
      posX = 179;
    }
    var posZ = pos.z;
    if (posZ < 8000000) {
      posZ = 8000000;
    }
    this.view.animateTo({
      position: [posX, 0, posZ],
      tilt: 0,
      heading: 0
    });
  }
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/utils/colors", ["exports", "ember"], function (exports, _ember) {
  exports.shadeColor = shadeColor;
  exports.hex_to_rgb = hex_to_rgb;
  exports.rgb_to_hsl = rgb_to_hsl;

  // from http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors

  function shadeColor(color, percent) {
    var f = parseInt(color.slice(1), 16),
        t = percent < 0 ? 0 : 255,
        p = percent < 0 ? percent * -1 : percent,
        R = f >> 16,
        G = f >> 8 & 0x00FF,
        B = f & 0x0000FF;
    return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
  }

  // from http://codepen.io/pankajparashar/pen/oFzIg?editors=0010

  function hex_to_rgb(hex) {
    var rgb = [];
    for (var i = 0; i < 6; i += 2) {
      rgb.push(parseInt(hex.substr(i, 2), 16));
    }
    return rgb;
  }

  function rgb_to_hsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    var h,
        s,
        l = (max + min) / 2;

    if (max == min) {
      h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);break;
          case g:
            h = (b - r) / d + 2;break;
          case b:
            h = (r - g) / d + 4;break;
        }
        h /= 6;
      }

    return [h * 100 + 0.5 | 0, s * 100 + 0.5 | 0, l * 100 + 0.5 | 0];
  }
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday('sdg-dash/utils/i18n/compile-template', ['exports', 'ember-i18n/utils/i18n/compile-template'], function (exports, _emberI18nUtilsI18nCompileTemplate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nUtilsI18nCompileTemplate['default'];
    }
  });
});
efineday('sdg-dash/utils/i18n/missing-message', ['exports', 'ember-i18n/utils/i18n/missing-message'], function (exports, _emberI18nUtilsI18nMissingMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberI18nUtilsI18nMissingMessage['default'];
    }
  });
});
efineday('sdg-dash/video-player/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    queryParams: ['src'],
    src: null
  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday('sdg-dash/video-player/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model(params, transition) {
      var in_src = '';
      var src = '';
      if (transition.queryParams) {
        in_src = transition.queryParams.src;
        if (transition.queryParams.src === 'aehin') {
          src = 'https://esri.box.com/shared/static/2kebf7zs45766lg9i90l3n3k3ho6wdw3.mp4';
        }
      }
      return _ember['default'].Object.create({
        src: src
      });
    }

  });
});
// Copyright 2016 Esri.
//
// Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
// You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
// language governing permissions and limitations under the License.
efineday("sdg-dash/video-player/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "fragmentReason": {
          "name": "triple-curlies"
        },
        "revision": "Ember@2.3.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 6
          }
        },
        "moduleName": "sdg-dash/video-player/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container pad-top-50");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 1, 1);
        return morphs;
      },
      statements: [["inline", "ivy-videojs", [], ["fluid", true, "controls", true, "src", ["subexpr", "@mut", [["get", "model.src", ["loc", [null, [2, 45], [2, 54]]]]], [], []]], ["loc", [null, [2, 2], [2, 56]]]]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

efineday('sdg-dash/config/environment', ['ember'], function(Ember) {
  var prefix = 'sdg-dash';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  equireray("sdg-dash/app")["default"].create({"name":"sdg-dash","version":"0.0.0+032ec098"});
}

/* jshint ignore:end */
//# sourceMappingURL=sdg-dash.map