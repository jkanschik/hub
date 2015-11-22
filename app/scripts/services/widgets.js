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
      { type: 'group',
        label: 'Wohnzimmer',
        widgets: []
      },
      { type: 'group',
        label: 'Schlafzimmer',
        widgets: []
      },
      { type: 'dateTime'
      },
      { type: 'weather',
        location: 'Essen',
        thingUID: 'yahooweather:weather:2c0d6cbf'
      },
      { type: 'weather',
        location: 'Berlin',
        thingUID: 'yahooweather:weather:berlin'
      }
    ]
  });
