'use strict';

require(__dirname + '/../dev/entry')

require('angular-mocks');

describe('Should test everything', function() {

  var $httpBackend;
  var auth;
  var main;

  describe('It should test something', () => {
    it('Should have a test', () => {
      expect(false).toBe(false);
    });
  });

  beforeEach(angular.mock.module('App'))
  var $controller;
  beforeEach(angular.mock.inject(function(_$httpBackend_, AuthService, _$controller_) {
    $controller     = _$controller_
    $httpBackend    = _$httpBackend_
    auth            = AuthService;

  }))

  it('should be a service', function() {
    expect(typeof auth).toBe('object');
  })

// TESTING AUTH SERVICE SIGN UP
  it('Should save a user token from the server to local storage', function() {
    var user = {name: 'Sam', password: 'lucy', email: 'email@gmail.com'}
    var fakeToken = {
      token: 'kjjd'
      }

    $httpBackend.expectPOST('http://localhost:3000/signup').respond(200, fakeToken);
    auth.createUser(user, function(err, res) {
      expect(err).toBe(null)
      expect(res.data.token).toBe('kjjd')
    })
    $httpBackend.flush();
  })

// TESTING AUTH SERVICE SIGN IN
  it('Should get back a token after signing in', function() {
    var user = {name: 'Sam', password: 'lucy', email: 'email@gmail.com'}
    var fakeTokenTwo = {
      token: 'iii'
    }
    $httpBackend.expectGET('http://localhost:3000/signin').respond(200, fakeTokenTwo);
    auth.signIn(user, function(err, res) {
      expect(err).toBe(null)
      expect(res.data.token).toBe('iii');
    })
    $httpBackend.flush();
  })

// TESTING THE MAIN CONTROLLER
  it('should recognize the Main Controller', function() {
    var $scope = {};
    var controller = $controller('MainController', { $scope: $scope});

    expect(typeof controller).toBe('object')
    expect(typeof controller.getStories).toBe('function')
    expect(typeof controller.space3dSides).toBe('object')
    expect(typeof controller.s3dboxSides).toBe('object')
    expect(controller.stories.length).toBe(0);
  })

// TESTING MAIN CONTROLLER GET STORIES FUNCTION
  it('should get all the stories', function() {
    var $scope = {};
    var controller = $controller('MainController', { $scope: $scope});

    $httpBackend.expectGET('http://localhost:3000/stories').respond(200, [
      {title: 'Test Story', description: 'Story for Karma'}
    ]);

    controller.getStories()
    $httpBackend.flush();
    expect(controller.stories.length).toBe(1);
  })

// TESTING THE CHANING FACE FUNCTION
  it('log that the "currentFace" count has increased', function() {
    var $scope = {};
    var controller = $controller('MainController', { $scope: $scope});

    controller.nextFace()
    expect(controller.currentFace).toBe(1);
  })
})

// TESTING ROUTE PROVIDER
describe('Testing the route provider and template/controller loader', function() {
  beforeEach(angular.mock.module('App'))
  var route;
  beforeEach(angular.mock.inject(function($route) {
    route = $route;
  }))
  it('Should map routes to controllers for the "/" route', function() {
    expect(route.routes['/'].controller).toBe('LandingController')
    expect(route.routes['/'].templateUrl).toEqual('./landing-view.html')
  })
  it('Should map routes to controllers for the "/signUp" route', function() {
    expect(route.routes['/signUp'].controller).toBe('LandingController')
    expect(route.routes['/signUp'].templateUrl).toEqual('./signUp-view.html')
  })
  it('Should map routes to controllers for the "/index" route', function() {
    expect(route.routes['/index'].templateUrl).toEqual('./main-view.html')
  })
})
