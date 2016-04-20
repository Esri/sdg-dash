import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('indicator-sheet', 'Integration | Component | indicator sheet', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{indicator-sheet}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#indicator-sheet}}
      template block text
    {{/indicator-sheet}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
