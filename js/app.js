App = Ember.Application.create();

App.Router.map(function() {
  // put your routes here
  this.route("about", { path: "/about"});
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['Java', 'JavaScript', 'Ruby'];
  }
});


