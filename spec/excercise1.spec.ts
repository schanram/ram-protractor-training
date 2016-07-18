"use strict";

// How we should do it?

// I would say we should do the exercise in two ways. 
// 1. First we should write tests by having everything in the spec file such as the logic required to interact the angular template or use 
//    of protractor specific vocabularies(by.binding, by.model... etc) to locate elements. 
// 2. Then we should create the page object for this test file and move the required logic to interact with the Angular template, into it. 
//    In this case our spec file will only have the assertion (expect) statements in the end.

// In my opinion the minimum scenarios we could cover for exercise 1, are as:

// 1. Find a specific element by different locators e.g. by.binding, by.css, by.model etc. and check whether that element is present on the screen.
// 2. Get the input element and replace it existing value with the new value. Test whether the new value replaced the existing one. 
// 3. Replace the name, email address or phone no and then hit the save button. Test whether it updates the contact info detail.

describe('Exercise1', function() {

  beforeEach(function() {
    browser.get('http://localhost:9000/#/exercise1');
  });

  it('should find element by model', function() {
    var emailInput = element(by.model('ctrl.user.email'));
    expect(emailInput.isPresent()).toBe(true);
  });  
});
