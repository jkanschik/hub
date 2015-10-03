'use strict';

describe('Directive: hubGroupItemTile', function () {

  // load the directive's module
  beforeEach(module('hubApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  xit('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<hub-group-item-tile></hub-group-item-tile>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the hubGroupItemTile directive');
  }));
});
