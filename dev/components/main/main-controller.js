// function() {
  angular.module('MainModule', [])
    .controller('MainController', ['$http', MainController])
    .directive('cubeRender', function() {
      return {
        restrict: 'E',
        templateUrl: './main-view.html'
      };
    });

  /////////////////////////////
  // defines controller
  ////////////////////////////

    function MainController ($http) {
      const storyRoute = 'http://localhost:3000/stories';
      this.stories = [];

      this.getStories = function() {
        $http.get(storyRoute)
          .then((result) => {
            console.log(result);
            this.stories = result.data;
          }, function (err) {
            console.log('error blah');
          });
      };
      this.rotateCube = function() {

      }
    }
// }
