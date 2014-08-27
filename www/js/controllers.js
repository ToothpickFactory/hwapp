'use strict';

/* Controllers */

var ctrl = angular.module('HWA.controllers', []);

ctrl.controller('ctrl_root', function($rootScope) {
    $rootScope.zoom =  window.innerHeight/1920 * 100 +'%';
})


ctrl.controller('ctrl_login', function($scope) {


})

ctrl.controller('ctrl_register', function($scope) {


})






