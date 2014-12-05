Handlebars.registerHelper('custom-html', function(name) {
  var html = Discourse.HTML.getCustomHTML(name);
  if (html) { return html; }

  var container = Discourse.__container__;
  if (container.lookup('template:' + name)) {
    return Ember.Handlebars.helpers.partial.apply(this, arguments);
  }
});
