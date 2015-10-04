'use strict';

/**
 * @ngdoc function
 * @name hubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hubApp
 */
angular.module('hubApp')
  .controller('MainCtrl', function ($scope, widgets) {
    $scope.widget = widgets;
  });
