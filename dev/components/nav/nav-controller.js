angular.module('NavModule', [])
  //.controller('NavController', [NavController])
  .directive('customNav', function() {
    return {
      restrict: 'E',
      templateUrl: './nav-view.html'
    };
  });
    
  /////////////////////////
  // defines controllers //
  /////////////////////////

  //TODO: add logic to keep track of active tab for styling
//function NavController() {
  //this.active
  

//}
