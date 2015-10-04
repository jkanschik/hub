'use strict';

/**
 * @ngdoc directive
 * @name hubApp.directive:hubGroupItemTile
 * @description
 * # hubGroupItemTile
 */
angular.module('hub.widgets')
  .directive('hubGroupTile', function () {
    return {
      templateUrl: 'widgets/group/groupTile.html',
      restrict: 'E'
    };
  });
