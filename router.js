function Router() {
  this.routes = {};
  this.currentUrl = '';
  this.init();
}

Router.prototype.route = function(path, callback) {
  this.routes[path] = callback || function(){};
};

Router.prototype.refresh = function() {
  this.currentUrl = location.hash.slice(1) || '/';
  this.routes[this.currentUrl]();
};

Router.prototype.init = function() {
  window.addEventListener('load', this.refresh.bind(this), false);
  window.addEventListener('hashchange', this.refresh.bind(this), false);
};

window.Router = new Router();
Router.route('/', function() {
  $.ajax({url:"./pages/home.html"}).then(function(data){
    $("#app").html("").append($(data))
  })
});
Router.route('/about', function() {
  $.ajax({url:"./pages/about.html"}).then(function(data){
    $("#app").html("").append($(data))
  })
});