"use strict";

// This file is only added to mark those points which require debate for coding convenstions 

import {ContactInfo}  from "./pageObjects/pages";

xdescribe("Excercise1", () => {
  let contactInfo: ContactInfo;

  // FA - DEBATE REQUIRED - Should we have mock test data objects (either within the file or in a separate file)
  // Problems :  
    // 1. Mock test data is a kind of unit test approach
    // 2. there could be risk that test data changed by one file could effect the results of another test. 
  let testData = {
    name: "Lionel Messi",
    email: "lMessi@barcelona.com",
    phone: "22-33-123456"
  }

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
      contactInfo.nameInput.sendKeys(testData.name);
      expect(contactInfo.nameInput.getAttribute("value")).toEqual(testData.name);
    });

    it("Should replace the existing email with the new value", () => {
      contactInfo.emailInput.clear();
      contactInfo.emailInput.sendKeys(testData.email);
      expect(contactInfo.emailInput.getAttribute("value")).toEqual(testData.email);
    });

    it("Should replace the existing phone no with the new value", () => {
      contactInfo.phoneInput.clear();
      contactInfo.phoneInput.sendKeys(testData.phone);
      expect(contactInfo.phoneInput.getAttribute("value")).toEqual(testData.phone);
    });
  });

  describe("when save the new contact details", () => {
    it("Should update the contact info name, email and phone no details", () => {
      contactInfo.nameInput.clear();
      contactInfo.nameInput.sendKeys(testData.name);
      contactInfo.emailInput.clear();
      contactInfo.emailInput.sendKeys(testData.email);
      contactInfo.phoneInput.clear();
      contactInfo.phoneInput.sendKeys(testData.phone);
      contactInfo.saveBtn.click();

      expect(contactInfo.nameInput.getAttribute("value")).toEqual(testData.name);
      expect(contactInfo.emailInput.getAttribute("value")).toEqual(testData.email);
      expect(contactInfo.phoneInput.getAttribute("value")).toEqual(testData.phone);
    });
  });
});
