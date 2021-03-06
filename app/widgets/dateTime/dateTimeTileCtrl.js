'use strict';

/**
 * @ngdoc function
 * @name hubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the hubApp
 */
angular.module('hub.widgets.dateTime')
  .controller('DateTimeTileCtrl', function ($scope, $interval) {

    $scope.$on('smarthome/update/Sun_Elevation', function(event, args) {
      $scope.sunElevation = args;
    });

    var timeoutId;
    function updateTime() {
      // load from http://localhost:8080/rest/items/Date
      $scope.currentDateTime = new Date();
    }

    // element.on('$destroy', function() {
    //   $interval.cancel(timeoutId);
    // });

    // start the UI update process; save the timeoutId for canceling
    timeoutId = $interval(function() {
      updateTime(); // update DOM
    }, 1000);

    updateTime();

  });
