'use strict';

/**
 * @ngdoc service
 * @name hubApp.widgets
 * @description
 * # widgets
 * Constant in the hubApp.
 */
angular.module('hubApp')
  .constant('widgets', {
    label: 'Start',
    widgets: [
      { type: 'Group',
        label: 'Wohnzimmer',
        widgets: []
      },
      { type: 'Group',
        label: 'Schlafzimmer',
        widgets: []
      },
      { type: 'DateTime'
      },
      { type: 'Weather',
        location: 'Essen',
        thingUID: 'yahooweather:weather:2c0d6cbf'
      },
      { type: 'Weather',
        location: 'Berlin',
        thingUID: 'yahooweather:weather:berlin'
      }
    ]
  });
