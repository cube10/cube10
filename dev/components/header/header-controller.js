angular.module('HeaderModule', [])
  .directive('customHeader', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: './header-view.html'
    };   
  });
