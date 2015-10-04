'use strict';

/**
 * @ngdoc directive
 * @name hubApp.directive:hubGroupItemTile
 * @description
 * # hubGroupItemTile
 */
angular.module('hub.widgets')
  .directive('hubWidget', function () {
    return {
      templateUrl: 'widgets/widget.html',
      restrict: 'E',
      scope: {
        widget: '='
      }
    };
  });
