import Ember from 'ember';
import colorUtils from 'sdg-dash/utils/colors';

import arcgisUtils from 'esri/arcgis/utils';
import ClassBreaksDefinition from 'esri/tasks/ClassBreaksDefinition';
import AlgorithmicColorRamp from  'esri/tasks/AlgorithmicColorRamp';
import GenerateRendererParameters from 'esri/tasks/GenerateRendererParameters';
import GenerateRendererTask from 'esri/tasks/GenerateRendererTask';
import LayerDrawingOptions from 'esri/layers/LayerDrawingOptions';
import SimpleFillSymbol from 'esri/symbols/SimpleFillSymbol';
import Color from 'esri/Color';

export default Ember.Service.extend({
  createMap(webMap, elem, options) {
    if (!options) {
      options = {
        mapOptions: {}
      };
    }
    options.mapOptions.smartNavigation = false;
    return arcgisUtils.createMap(webMap, elem, options);
  },

  destroyMap(map, handlers) {
    if (Ember.isArray(handlers)) {
      handlers.forEach((handler) => {
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

  renderSdgLayer(goal, hex_color_to, layer, layer_url) {
    console.log('rendering SDG index layer', goal);

    const hex_color_from = colorUtils.shadeColor(hex_color_to, 0.75);
    console.log(hex_color_to, hex_color_from);

    const params = this.getClassBreaksParams(goal, hex_color_from, hex_color_to);

    let generateRenderer = new GenerateRendererTask(layer_url);
    generateRenderer.execute(params)
      .then(function (renderer) {
        console.log(renderer);
        let optsArray = [];
        let drawingOptions = new LayerDrawingOptions();
        drawingOptions.renderer = renderer;
        optsArray[0] = drawingOptions;

        layer.setLayerDrawingOptions( optsArray );
        layer.setVisibleLayers([0]);
        layer.show();

      }, function (error) {
        console.log('error generating renderer for sdg index map', error);
      });
  },

  getClassBreaksParams(goal, cfrom, cto) {
    let classDef = new ClassBreaksDefinition();
    classDef.classificationField = `SDG${goal}`;
    classDef.classificationMethod = 'natural-breaks'; // always natural breaks
    classDef.breakCount = 5; // always five classes

    let colorRamp = new AlgorithmicColorRamp();
    colorRamp.fromColor = new Color.fromHex(cfrom);
    colorRamp.toColor = new Color.fromHex(cto);
    colorRamp.algorithm = "hsv"; // options are:  "cie-lab", "hsv", "lab-lch"
    
    classDef.baseSymbol = new SimpleFillSymbol('solid', null, null);
    classDef.colorRamp = colorRamp;

    let params = new GenerateRendererParameters();
    params.classificationDefinition = classDef;

    return params;
  }

});