App = Ember.Application.create();

App.Router.map(function(){
  this.route('home', {path: 'home'});
  this.route('not-found', {path: '/*path'});
});

App.IndexRoute = Ember.Route.extend({
  model: function(){
    return ['red', 'blue', 'yellow'];
  }
});