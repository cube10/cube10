angular.module('RouteModule', [require('angular-route')])
  .config(['$routeProvider', function(route) {
    route
      .when('/', {
        templateUrl: './landing-view.html',
        controller: 'LandingController',
        controllerAs: 'landingCtrl'
      })
      .when('/signUp', {
        templateUrl: './signUp-view.html',
        controller: 'LandingController',
        controllerAs: 'landingCtrl'
      })
      .when('/index', {
        templateUrl: './main-view.html'
      })
      .otherwise({
        redirectTo: '/index'
      });
  }])
