'use strict';

/**
 * @ngdoc directive
 * @name hubApp.directive:hubDateTimeItemTile
 * @description
 * # hubDateTimeItemTile
 */
angular.module('hubApp')
  .directive('hubDateTimeItemTile', function ($interval) {
    return {
      templateUrl: 'items/dateTimeItem/dateTimeItemTile.html',
      restrict: 'E',
      link: function postLink(scope, element) {
        // scope.currentDateTime = new Date();

        var timeoutId;

        function updateTime() {
          scope.currentDateTime = new Date();
        }
        element.on('$destroy', function() {
          $interval.cancel(timeoutId);
        });

        // start the UI update process; save the timeoutId for canceling
        timeoutId = $interval(function() {
          updateTime(); // update DOM
        }, 1000);

      }
    };
  });
