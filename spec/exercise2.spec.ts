// How we should do it?

// I would say we should do the exercise in two ways. 
// 1. First we should write tests by having everything in the spec file such as the logic required to interact the angular template or use 
//    of protractor specific vocabularies(by.binding, by.model... etc) to locate elements. 
// 2. Then we should create the page object for this test file and move the required logic to interact with the Angular template, into it. 
//    In this case our spec file will only have the assertion (expect) statements in the end.

// In my opinion the minimum scenarios we could cover for exercise 1, are as:

// 1. Count the number of users by using the locator element.all(...) 
// 2. Count the number of users by using a by.repeater(...)
// 3. Find Chuck Norris email address in the first row
// 4. Find the email address for John Rambo
// 5. Get the Email columns information
 "use strict";

import {UserListPage}  from "./pageObjects/pages";

describe("Excercise2", () => {
    let userListPage: UserListPage;

    beforeAll(() => {
        userListPage = new UserListPage();
    });

    describe('When user views the list of users', () => {
        // Answer 1
        it('Should have 8 users (locator)', () => {
            const userRowCells = element.all(by.css('.user-row td'));
            userRowCells.count().then((total: number) => {
                const columns = 3;
                expect(total/columns).toBe(8);                    
            });        
        });

        // Answer 2
        it('Should have 8 users', () => {
            expect(userListPage.users.count()).toBe(8);
        });

        // Answer 3
        it('Should be Chuck Norris email in first row', () => {
            const firstRowEmail = userListPage.emails.first();
            expect(firstRowEmail.getText()).toMatch("chuck@gmail.com");
        });

        // Answer 4
        it('Should be able find the email address for John Rambo', () => {
            const email = userListPage.findEmail("rambo@gmail.com");
            expect(email.getText()).toMatch("rambo@gmail.com");
        });  

        // Answer 5
        it('Should be to able to get the email columns information', () => {
            expect(userListPage.emails.count()).toBe(8);
            userListPage.emails.each((element: protractor.ElementFinder) => {
                expect(element.getText()).toBeTruthy();
            });
        });  
  }); 
});