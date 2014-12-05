export default Ember.HTMLBars.makeBoundHelper(function(val) {
  return new Handlebars.SafeString(I18n.t(val));
});

Handlebars.registerHelper('countI18n', function(key, options) {
  var view = Discourse.View.extend({
    tagName: 'span',
    shouldRerender: Discourse.View.renderIfChanged('count', 'suffix'),

    render: function(buffer) {
      buffer.push(I18n.t(key + (this.get('suffix') || ''), { count: this.get('count') }));
    }

  });
  return Ember.Handlebars.helpers.view.call(this, view, options);
});
