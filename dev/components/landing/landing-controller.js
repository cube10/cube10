'use strict';

angular.module('LandingModule', [])

  .controller('LandingController', function() {

  })

  .directive('landingPage', function() {
    return {
      restrict: 'E',
      templateUrl: './landing-view.html'
    }
  })
