App = Ember.Application.create();

App.Router.map(function(){
  this.route('home', {path: 'home'});
  this.route('not-found', {path: '/*path'});
});

App.HomeRoute = Ember.Route.extend({

});

App.HomeController = Ember.Controller.extend({
	actions: {
		tituloClicked: function(){
			alert('home');
		},
	}, 
	titulo: 'Home'
});

App.IndexRoute = Ember.Route.extend({
  model: function(){
    return ['red', 'blue', 'yellow'];
  }
});