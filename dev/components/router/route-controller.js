angular.module('RouteModule', [require('angular-route')])
  .config(['$routeProvider', function(route) {
    route
      .when('/', {
        templateUrl: './login-view.html'
      })
      .when('/login', {
        templateUrl: './login-view.html'
      })
      .when('/register', {
        templateUrl: './register-view.html',
        controller: 'RegisterController',
        controllerAs: 'vm'
      })
      .when('/index', {
        templateUrl: './main-view.html'
      })
      .otherwise({
        redirectTo: '/index'
      });
  }])
