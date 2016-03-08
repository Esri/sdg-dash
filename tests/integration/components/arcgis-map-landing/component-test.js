import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('arcgis-map-landing', 'Integration | Component | arcgis map landing', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{arcgis-map-landing}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#arcgis-map-landing}}
      template block text
    {{/arcgis-map-landing}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
