module.exports = function(app) {
  app.factory('AuthService', ['$http', '$window', function($http, $window) {
    var token;
    var url = 'http://localhost:3000';
    var auth = {
      createUser(user, cb) {
        console.log('AUTH SERVICE HAS BEEN HIT WITH : ', user);
        cb || function() {};
        $http.post(url + '/signup', user)
          .then((res) => {
            console.log(res);
            console.log('AUTH SERVICE : TOKEN GIVEN BACK TO AUTH SERVICE : ');
            token = $window.localStorage.token = res.data.token;
            cb(null, res)
          }, (err) => {
            console.log('AUTHER SERVICE ERROR', err);
            cb(err)
          })
      },
      getToken() {
        return token || $window.localStorage.token;
      },
    signOut(cb) {
      // cb = cb || function() {}
      token = null;
      $window.localStorage.token = null;
      cb && cb();
    },
    signIn(user, cb) {
      cb = cb || function() {};
      $http.get(url + '/signin', {
        headers: {
          authorization: 'Basic ' + btoa(user.email + ':' + user.password)
        }})
      .then((res) => {
        token = $window.localStorage.token = res.data.token;
        cb(null, res);
      }, (err) => {
        cb(err);
      })
      // debugger If I send it Aaron's way it get preflight header error, if i send it my way its doesn't see the object
    }
  }
    return auth;
  }])
}