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
  // defines controllers
  ////////////////////////////

    function MainController ($http) {
      const storyRoute = 'http://localhost:3000/stories';
      this.stories = [];
      this.currentFace = 0;
      this.sides = ['_3dface--front', '_3dface--top', '_3dface--bottom', '_3dface--left', '_3dface--right', '_3dface--back'];

      this.nextFace = function() {
        if (this.currentFace > 6) this.currentFace = 0;
        this.currentFace = ($scope.current + 1) % $scope.data.length;
      }


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
