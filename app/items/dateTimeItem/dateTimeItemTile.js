'use strict';

/**
 * @ngdoc directive
 * @name hubApp.directive:hubDateTimeItemTile
 * @description
 * # hubDateTimeItemTile
 */
angular.module('hubApp')
  .directive('hubDateTimeItemTile', function () {
    return {
      templateUrl: 'items/dateTimeItem/dateTimeItemTile.html',
      restrict: 'E'
//       link: function postLink(scope, element) {
// //        element.text('this is the hubDateTimeItemTile directive');
//       }
    };
  });
