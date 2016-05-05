angular.module('NavModule', [])
  .directive('customNav', function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: './nav-view.html'
    };
  });
