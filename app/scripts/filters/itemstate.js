'use strict';

/**
 * @ngdoc filter
 * @name hubApp.filter:itemState
 * @function
 * @description
 * # itemState
 * Filter in the hubApp.
 */
angular.module('hubApp')
  .filter('itemState', function () {
    return function (item) {
      if (item && item.stateDescription && item.stateDescription.pattern) {
        return sprintf(item.stateDescription.pattern, item.state);
      }
      return item;
    };
  });
