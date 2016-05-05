  /////////////////////////////////////////
  // defines module and custom directive
  /////////////////////////////////////////

  angular.module('MainModule', [])
    .controller('MainController', ['$http', '$scope', MainController])
    .directive('cubeRender', function() {
      return {
        restrict: 'E',
        templateUrl: './main-view.html'
      };
    });

  /////////////////////////////
  // defines controller
  ////////////////////////////

    function MainController ($http, $scope) {
      const storyRoute    = 'http://localhost:3000/stories';
      this.stories        = [];

      //expanded article render
      this.expandArticle = function(story) {
        story.toggleArticle = !story.toggleArticle
      }

      //expanded image render
      this.expandImage = function(story) {
        story.toggleImage = !story.toggleImage
      }

      //makes API call to get story instances
      this.getStories = function() {
        $http.get(storyRoute)
          .then((result) => {
            console.log(result);
            this.stories = result.data;
          }, function (err) {
            console.log('error blah');
          });
      };
    }
