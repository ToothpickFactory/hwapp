'use strict';


angular.module('HWA', [
    'HWA.services',
    'HWA.directives',
    'HWA.controllers',
    'ngRoute',
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/login.htm', controller: 'ctrl_login'});
  $routeProvider.when('/register', {templateUrl: 'partials/register.htm', controller: 'ctrl_register'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);




