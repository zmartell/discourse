export default Ember.HTMLBars.makeBoundHelper(function(dt) {
  return new Handlebars.SafeString(Discourse.Formatter.autoUpdatingRelativeAge(new Date(dt), {format: 'medium', title: true }));
});
