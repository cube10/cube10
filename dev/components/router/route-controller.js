angular.module('RouteModule', [require('angular-route')])
  .config(['$routeProvider', function(route) {
    route
      .when('/index', {
        templateUrl: './main-view.html'
      })
      .otherwise({
        redirectTo: '/index'
      });
  }])
