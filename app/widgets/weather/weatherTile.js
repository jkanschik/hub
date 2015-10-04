'use strict';

/**
 * @ngdoc directive
 * @name hubApp.directive:hubDateTimeItemTile
 * @description
 * # hubDateTimeItemTile
 */
angular.module('hub.widgets.weather')
  .directive('hubWeatherTile', function () {
    return {
      templateUrl: 'widgets/weather/weatherTile.html',
      restrict: 'E',
      scope: {
        widget: '='
      }
    };
  });
