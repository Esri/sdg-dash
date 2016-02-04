import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  displayNumber: DS.attr('string'),
  realNumber: DS.attr('integer'),
  description: DS.attr('description'),
  colorHex: DS.attr('string'),
  colorRgb: DS.attr('string'),
  targets: DS.attr()
});
