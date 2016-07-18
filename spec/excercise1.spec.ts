"use strict";

describe('Exercise1', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/exercise1');
  });

  it('should find element by model', function() {
    var emailInput = element(by.model('ctrl.user.email'));
    expect(emailInput.isPresent()).toBe(true);
  });  
});
