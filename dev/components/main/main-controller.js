(function() {
  angular.module('MainModule')
    .controller('MainController', ['$http', MainController])
    .directive('cubeRender', function() {
      return {
        restrict: 'EA',
        templateUrl: './main-template.html'
      };
    });

    function MainController ($http) {
      const storyRoute = 'https://localhost:3000/stories';
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
    }

})();
