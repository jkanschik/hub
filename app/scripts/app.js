'use strict';

/**
 * @ngdoc overview
 * @name hubApp
 * @description
 * # hubApp
 *
 * Main module of the application.
 */
angular
  .module('hubApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'hub.widgets'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope) {
    var events = new EventSource('/rest/events');
    events.onmessage = function(event) {
      var data = JSON.parse(event.data);
      $rootScope.$broadcast(data.topic, data.object);
    };
    events.onerror = function(err) {
      console.error('Problem with connection to openhab event stream:', err);
    };
  });
