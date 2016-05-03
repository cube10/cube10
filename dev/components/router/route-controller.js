angular.module('RouteModule', [require('angular-route')])
  .config(['$routeProvider', function(route) {
    route
      .when('/', {
        templateUrl: './landing-view.html'
      })
      .when('/index', {
        templateUrl: './main-view.html'
      })
      .otherwise({
        redirectTo: '/index'
      });
  }])
