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
        label: 'Wetter in Essen',
        itemUID: 'yahooweather:weather:2c0d6cbf'
      },
      { type: 'Weather',
        label: 'Wetter in Berlin',
        itemUID: 'yahooweather:weather:berlin'
      }
    ]
  });
