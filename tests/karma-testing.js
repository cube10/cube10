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
    $controller = _$controller_
    $httpBackend = _$httpBackend_
    auth = AuthService;

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

})


  // it('Should delete and set the user toke to null on sign out', function() {
  // auth.signOut(function(err, res) {
  //   console.log('SIGN OUT FUNCTION : ', res);
  // })
  // })

// describe('LandingController', function() {
//   beforeEach(module('App'));
//
//   var $controller;
//
//   beforeEach(inject(function(_$controller_) {
//     $controller = _$controller_;
//
//   describe('LandingController.add', function() {
//     it('should get the sum of the numbers in the add test funciton', function() {
//       var controller = $controller('LandingController', { $scope: $scope });
//       $scope.add(5, 5
//         console.log('CONTROLLER IS : ', controller);
//       expect($scope.num).toEqual(10);
//
//     })
//   })
// });
//
//
// }));

  // beforeEach(angular.mock.module('PeopleApp'))
  // beforeEach(angular.mock.inject(function($controller) {
  //   peopleController = $controller('PeopleController');
  // }))
//   it('Should construct and controller', () => {
//     expect(typeof peopleController).toBe('object');
//     expect(peopleController.people[0]).toBe('person');
//     expect(typeof peopleController.getPeople).toBe('function');
//   });
//   describe('REST tests', () => {
//     var $httpBackend;
//     beforeEach(angular.mock.inject(function(_$httpBackend_){
//       $httpBackend = _$httpBackend_;
//     }));
//     afterEach(() => {
//       $httpBackend.verifyNoOutstandingExpectation();
//       $httpBackend.verifyNoOutstandingRequest();
//     });
//
//     it('Should get all people', () => {
//       $httpBackend.expectGET('http://localhost:3000/api/people')
//       .respond(200, [{name: 'Johnsoville'}]);
//       peopleController.getPeople();
//       $httpBackend.flush();
//       expect(peopleController.people.length).toBeGreaterThan(0);
//       expect(peopleController.people[0].name).toBe('Johnsoville');
//     });
//
//     it('Should create a new person', () => {
//       $httpBackend.expectPOST('http://localhost:3000/api/people', {name: 'post person'})
//
//       .respond(200, {name: 'post person', age: 27, _id:'uniqueid'});
//       peopleController.createPerson({name: 'post person'})
//       $httpBackend.flush()
//       expect(peopleController.people.length).toBe(2);
//       expect(peopleController.people[1].name).toBe('post person')
//     });
//
//     it('Should delete a person', () => {
//       $httpBackend.expectDELETE('http://localhost:3000/api/people/19')
//       .respond(200, 'deleted');
//       peopleController.people.push({name: 'sam', _id: 19});
//
//       peopleController.removePerson(19);
//       $httpBackend.flush();
//       expect(peopleController.people.length).toBe(1);
//       expect(peopleController.people.every((p) => p._id != 19)).toBe(true);
//     });
//
//     it('Should update a person', () => {
//       var updatePerson = {name: 'johnny wat', _id: 15};
//       $httpBackend.expectPUT('http://localhost:3000/api/people/15')
//       .respond(200, 'updated');
//       peopleController.people.push(updatePerson);
//       peopleController.updatePerson(updatePerson);
//       $httpBackend.flush();
//       expect(peopleController.editing).toBe(false);
//     });
//
//
//   });
