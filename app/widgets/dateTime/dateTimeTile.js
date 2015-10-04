'use strict';

/**
 * @ngdoc directive
 * @name hubApp.directive:hubDateTimeItemTile
 * @description
 * # hubDateTimeItemTile
 */
angular.module('hub.widgets.dateTime')
  .directive('hubDateTimeTile', function ($interval) {
    return {
      templateUrl: 'widgets/dateTime/dateTimeTile.html',
      restrict: 'E',
      link: function postLink(scope, element) {

        var timeoutId;

        function updateTime() {
          // load from http://localhost:8080/rest/items/Date
          scope.currentDateTime = new Date();
        }

        element.on('$destroy', function() {
          $interval.cancel(timeoutId);
        });

        // start the UI update process; save the timeoutId for canceling
        timeoutId = $interval(function() {
          updateTime(); // update DOM
        }, 1000);

        updateTime();
      }
    };
  });
