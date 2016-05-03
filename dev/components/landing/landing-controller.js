'use strict';

angular.module('LandingModule', [])

// ADD IN ERROR AND AUTH SERVICES ?? TO FUNCTION AS WELL

  .controller('LandingController',['$log', '$http', '$location',
  function($log, $http, $location) {
    console.log('LANDING CONTROLLER HAS BEEN USED');

    const vm = this;
    // vm.error = ErrorService();

    // vm.signIn = function(user) {
    //   AuthService.signIn(user, (err, res) => {
    //     if (err) return ErrorService('Problem signing in')
    //     $location.path('/home');
    //   })
    // }
    //
    vm.signUp = function(user) {
      // AuthService.createUser(user, function(err, res) {
      //   if (err) return ErrorService('Problem Creating User');
        $location.path('/index');
      // })
    }
    //
    // vm.signOut = function() {
    //   AuthService.signOut(() => {
    //     $location.path('/signUp');
    //   })
    // }

    vm.continueTo = function() {
      $log.log('ContinueTo HAS BEEN HIT');
      $location.url('/index')
    }

    vm.signUpPage = function() {
      $location.url('/signUp')
    }

  }])

  // .directive('landingPage', function() {
  //   return {
  //     restrict: 'E',
  //     templateUrl: './landing-view.html',
  //     controller: 'LandingController'
  //   }
  // })
  // SHOW THE  NECESSARY VIEWS
