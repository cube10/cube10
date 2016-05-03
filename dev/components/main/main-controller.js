// function() {
  angular.module('MainModule', [])
    .controller('MainController', ['$http', '$scope', MainController])
    .directive('cubeRender', function() {
      return {
        restrict: 'E',
        templateUrl: './main-view.html'
      };
    });

  /////////////////////////////
  // defines controllers
  ////////////////////////////

    function MainController ($http, $scope) {
      const storyRoute = 'http://localhost:3000/stories';
      this.stories = [];
      this.currentFace = 0;
      this.space3dSides = ['space3d', 'space3d-t', 'space3d-bo', 'space3d-l', 'space3d-r', 'space3d-ba'];
      this.s3dboxSides = ['_3dbox', '_3dbox-t', '_3dbox-bo',  '_3dbox-l', '_3dbox-r', '_3dbox-ba'];

      // this.space3dSides = ['space3d', 'red', 'blue', 'space3d-l', 'space3d-r', 'space3d-ba'];
      // this.s3dboxSides = ['_3dbox', 'red', 'blue',  '_3dbox-l', '_3dbox-r', '_3dbox-ba'];
      this.spaceCubeStyle = this.space3dSides[this.currentFace];
      this.boxCubeStyle = this.s3dboxSides[this.currentFace];

      this.nextFace = function() {
        if (this.currentFace >= 6) this.currentFace = 0;
        this.currentFace++;
        this.spaceCubeStyle = this.space3dSides[this.currentFace];
        this.boxCubeStyle = this.s3dboxSides[this.currentFace];
        // $scope.$apply();
        console.log('face changed');
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
