import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('arcgis-3d-map', 'Integration | Component | arcgis 3d map', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{arcgis-3d-map}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#arcgis-3d-map}}
      template block text
    {{/arcgis-3d-map}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
