angular.module('NavModule', [])
  .directive('customNav', function() {
    return {
      restrict: 'E',
      templateUrl: './nav-view.html'
    };
  });
    
  /////////////////////////
  // defines controllers //
  /////////////////////////

