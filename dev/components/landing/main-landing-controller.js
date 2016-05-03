
// LOGIN CONTROLLER
//
// (function () {
//     'use strict';
//
//     angular.module('LoginModule', [])
//         .controller('LoginController', LoginController);
//
//     LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
//     function LoginController($location, AuthenticationService, FlashService) {
//         var vm = this;
//
//         vm.login = login;
//
//         (function initController() {
//             // reset login status
//             AuthenticationService.ClearCredentials();
//         })();
//
//         function login() {
//           console.log('LOGIN FUNCTION HAS BEEN HIT')
//             vm.dataLoading = true;
//             AuthenticationService.Login(vm.username, vm.password, function (response) {
//                 if (response.success) {
//                     AuthenticationService.SetCredentials(vm.username, vm.password);
//                     $location.path('/index');
//                 } else {
//                     FlashService.Error(response.message);
//                     vm.dataLoading = false;
//                 }
//             });
//         };
//     }
//
// })();
//
//
//
// // REGISTER CONTROLLER
//
// (function () {
//     'use strict';
//
//     angular.module('RegisterModule', [])
//         .controller('RegisterController', RegisterController);
//
//     RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService'];
//     function RegisterController(UserService, $location, $rootScope, FlashService) {
//         var vm = this;
//
//         vm.register = register;
//
//         function register() {
//           console.log('REGISER FUNCTION HAS BEEN HIT')
//             vm.dataLoading = true;
//             UserService.Create(vm.user)
//                 .then(function (response) {
//                     if (response.success) {
//                         FlashService.Success('Registration successful', true);
//                         $location.path('/login');
//                     } else {
//                         FlashService.Error(response.message);
//                         vm.dataLoading = false;
//                     }
//                 });
//         }
//     }
//
// })();
