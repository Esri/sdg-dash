import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('summary-stat-card', 'Integration | Component | summary stat card', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{summary-stat-card}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#summary-stat-card}}
      template block text
    {{/summary-stat-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
