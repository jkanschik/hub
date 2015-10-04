'use strict';

describe('Service: widgets', function () {

  // load the service's module
  beforeEach(module('hubApp'));

  // instantiate service
  var widgets;
  beforeEach(inject(function (_widgets_) {
    widgets = _widgets_;
  }));

  it('should do something', function () {
    expect(!!widgets).toBe(true);
  });

});
