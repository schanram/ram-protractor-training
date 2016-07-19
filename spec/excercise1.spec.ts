"use strict";
import { UpdateContactPage } from "./update.contact.page";

describe('Exercise1', () => {
  let updateContactPage: UpdateContactPage;
  let testData = {
    name: "Si Chan",
    email: "sichan77@gmail.com",
    phone:  "07789438618"
  };

  beforeEach(() => {
    updateContactPage = new UpdateContactPage();      
    browser.get('http://localhost:9000/#/exercise1');
    browser.waitForAngular();
  });

  describe('When user sees the update contact form', () => {
    it('Should have name elements', () => {
      expect(updateContactPage.name.isPresent()).toBe(true);
      expect(updateContactPage.displayName.isPresent()).toBe(true);
    });

    it('Should have email elements', () => {
      expect(updateContactPage.email.isPresent()).toBe(true);
      expect(updateContactPage.displayEmail.isPresent()).toBe(true);
    });

    it('Should have phone elements', () => {
      expect(updateContactPage.phone.isPresent()).toBe(true);
      expect(updateContactPage.phone.isPresent()).toBe(true);
    });  
  }); 

  describe('When enters update contact detail', () => {
    it('Should show the name the user entered in the name input', () => {
      const updatedName = testData.name;
      expect(updateContactPage.getName()).not.toMatch(updatedName);
      updateContactPage.setName(updatedName);
      expect(updateContactPage.getName()).toMatch(testData.name);
    });
    it('Should show the email the user entered in the email input', () => {
      const updatedEmail = testData.email;
      expect(updateContactPage.getEmail()).not.toMatch(updatedEmail);
      updateContactPage.setEmail(updatedEmail);
      expect(updateContactPage.getEmail()).toMatch(updatedEmail);
    });
    it('Should show the phone the user entered in the phone input', () => {
      const updatedPhone = testData.phone;
      expect(updateContactPage.getPhone()).not.toMatch(updatedPhone);
      updateContactPage.setPhone(updatedPhone);
      expect(updateContactPage.getPhone()).toMatch(updatedPhone);
    });
  });

  describe('When clicking on save', () => {
    it('Should update the display name to be the same the new name entered', () => {
      // make sure the existing display name value is not initially as the same as the updated name
      const updatedName = testData.name;
      expect(updateContactPage.getDisplayName()).not.toMatch(updatedName);

      updateContactPage.setName(updatedName);
      updateContactPage.save();
      expect(updateContactPage.getDisplayName()).toMatch(updatedName);
    });
    it('Should update the display email address to be the same the new email address entered', () => {
      // make sure the existing display name value is not initially as the same as the updated name
      const updatedEmail = testData.email;
      expect(updateContactPage.getDisplayEmail()).not.toMatch(updatedEmail);
        
      updateContactPage.setEmail(updatedEmail);
      updateContactPage.save();
      expect(updateContactPage.getDisplayEmail()).toMatch(updatedEmail);
    });
    it('Should update the display phone number to be the same the new phone entered', () => {
      // make sure the existing display name value is not initially as the same as the updated name
      const updatedPhone = testData.phone;
      expect(updateContactPage.getDisplayPhone()).not.toMatch(updatedPhone);
        
      updateContactPage.setPhone(updatedPhone);
      updateContactPage.save();
      expect(updateContactPage.getDisplayPhone()).toMatch(updatedPhone);
    });    
  }); 
});
