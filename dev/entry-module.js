'use strict';

// Put any modules needed into the dependencies for the 'App' module.

const angular = require('angular');

(function () {
  angular.module('App', ['MainModule', 'HeaderModule', 'RouteModule', 'LandingModule']);
})();
