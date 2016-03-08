import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    const data_info = this.get('model');
    
    let info = `<div><p class="text-muted"><u>Source</u></p><p class="text-primary">`;

    if (data_info.source_url) {
      info += `<a href="${data_info.source_url}" target="_blank">${data_info.source}</a><span class="glyphicon glyphicon-share-alt"></span></p></div><div><p class="text-muted"><u>Provider</u></p><p class="text-primary">${data_info.provider}</p></div>`;
    } else {
      info += `${data_info.source}</p></div><div><p class="text-muted"><u>Provider</u></p><p class="text-primary">${data_info.provider}</p></div>`;
    }

    if (data_info.method_url) {
      info += `<div><p class="text-muted"><u>Definition</u></p>
              <span class="text-primary"><a href="${data_info.method_url}" target="_blank">${data_info.method_name}</a></span>
              <span class="glyphicon glyphicon-share-alt"></span></div>`;
    }

    this.$(`#popover-${this.elementId}`).popover({ content: info });
  }
});