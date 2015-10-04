'use strict';

angular.module('hub.widgets.weather')
  .controller('WeatherTileCtrl', ['$scope', '$q', 'Things', 'Items', function ($scope, $q, Things, Items) {

    $scope.thing = Things.get({uid: $scope.widget.thingUID}).$promise
      .then(function(thing) {
        var channels = _.groupBy(thing.channels, 'id');

        $scope.channelItems = _.mapValues(channels, function(channelsForId) {
          var linkedItems = channelsForId[0].linkedItems;
          if (linkedItems.length === 1) {
            return Items.get({name: linkedItems[0]});
          }
        });

      });

  }]);
