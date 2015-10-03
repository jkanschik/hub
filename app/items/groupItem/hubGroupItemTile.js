'use strict';

/**
 * @ngdoc directive
 * @name hubApp.directive:hubGroupItemTile
 * @description
 * # hubGroupItemTile
 */
angular.module('hubApp')
  .directive('hubGroupItemTile', function () {
    return {
      templateUrl: 'items/groupItem/hubGroupItemTile.html',
      restrict: 'E'
//       link: function postLink(scope, element) {
// //        element.text('this is the hubGroupItemTile directive');
//       }
    };
  });
