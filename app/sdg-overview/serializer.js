import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

  normalizeQueryResponse(store, primaryModelClass, payload, id, requestType) {
    var data = payload.data.map(function (item) {
      return {
        id: item.goal,
        type: 'sdg',
        attributes: {
          title: item.short,
          displayNumber: (item.goal < 10 ? '0' + item.goal : item.goal.toString()),
          realNumber: item.goal,
          description: item.title,
          colorHex: item.colorInfo.hex,
          colorRgb: item.colorInfo.rgb.join(',')
        }
      }
    });
    return {
      "data": data,
      "meta": {}
    };
  },

  normalizeQueryRecordResponse(store, primaryModelClass, payload, id, requestType) {
    var goal = payload.data[0];
    // assign incrementing id to targets for UI display
    goal.targets.forEach(function(t, index) {
      t.autoId = index;
    });
    var data = {
      id: goal.goal,
      type: 'sdg',
      attributes: {
        displayNumber: (goal.goal < 10 ? '0' + goal.goal : goal.goal.toString()),
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