'use strict';

/**
 * @ngdoc service
 * @name hubApp.items
 * @description
 * # items
 * Factory in the hubApp.
 */
angular.module('hub.rest', [])
  .factory('Items', function ($resource) {
    return $resource('rest/items/:name');
  })
  .factory('Things', function ($resource) {
    return $resource('rest/things/:uid', {uid: '@uid'});
  });
