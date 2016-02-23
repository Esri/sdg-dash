import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    let data_info = this.get('model');
    let info = `<table class="table table-condensed"> <thead> <tr><th>Source</th> <th>Provider</th></tr> </thead> <tbody> <tr><td>${data_info.source}</td> <td>${data_info.provider}</td> </tr></tbody> </table>`;
    Ember.$('#popover-' + this.elementId).popover({ content: info });
  }
});
