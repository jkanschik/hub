'use strict';

angular
  .module('hub.widgets.group', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/widgets/group/:id', {
        templateUrl: 'widgets/group/groupContainer.html',
        controller: 'GroupContainerCtrl'
      });
  });
