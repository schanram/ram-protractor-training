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

import {ContactInfo}  from "./pageObjects";

xdescribe("Excercise1", () => {
  let contactInfo: ContactInfo;

  beforeAll(() => {
    contactInfo = new ContactInfo();
  });

  describe("When user open the contact info form", () => {

    // FA - DEBATE REQUIRED - Should we have multiple asserts in a singe test case?
    // Protractor does support to continue the remaining assets if one fail but its
    // hard to figure out what is wrong when the test fails  
    it("Should name, email and phone input elements", () => {
      expect(contactInfo.nameInput.isPresent()).toBeTruthy();
      expect(contactInfo.emailInput.isPresent()).toBeTruthy();
      expect(contactInfo.phoneInput.isPresent()).toBeTruthy();
    });

    it("Should have name, email and phone text elements", () => {
      expect(contactInfo.name.isPresent()).toBeTruthy();
      expect(contactInfo.email.isPresent()).toBeTruthy();
      expect(contactInfo.phone.isPresent()).toBeTruthy();
    });
  });

  describe("when update the contact info detail", () => {

    it("Should replace the existing name with the new value", () => {
      contactInfo.nameInput.clear();
      contactInfo.nameInput.sendKeys("Lionel Messi");
      expect(contactInfo.nameInput.getAttribute("value")).toEqual("Lionel Messi");
    });

    it("Should replace the existing email with the new value", () => {
      contactInfo.emailInput.clear();
      contactInfo.emailInput.sendKeys("lMessi@barcelona.com");
      expect(contactInfo.emailInput.getAttribute("value")).toEqual("lMessi@barcelona.com");
    });

    it("Should replace the existing phone no with the new value", () => {
      contactInfo.phoneInput.clear();
      contactInfo.phoneInput.sendKeys("22-33-123456");
      expect(contactInfo.phoneInput.getAttribute("value")).toEqual("22-33-123456");
    });
  });

  describe("when save the new contact details", () => {
    it("Should update the contact info name, email and phone no details", () => {
      contactInfo.nameInput.clear();
      contactInfo.nameInput.sendKeys("Lionel Messi");
      contactInfo.emailInput.clear();
      contactInfo.emailInput.sendKeys("lMessi@barcelona.com");
      contactInfo.phoneInput.clear();
      contactInfo.phoneInput.sendKeys("22-33-123456");
      contactInfo.saveBtn.click();

      expect(contactInfo.nameInput.getAttribute("value")).toEqual("Lionel Messi");
      expect(contactInfo.emailInput.getAttribute("value")).toEqual("lMessi@barcelona.com");
      expect(contactInfo.phoneInput.getAttribute("value")).toEqual("22-33-123456");
    });
  });
});
