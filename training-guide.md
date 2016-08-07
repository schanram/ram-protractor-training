# Topics
* Introducation
* Protractor
  * Introduction to Protractor, Locating elements and interacting with the angular page
  * Locating Elements - Writing CSS Expressions
  * Page Objects 
  * Configurations
  * Style guide
    * Generic rules
    * Project structure
    * Locator strategies
    * Page objects
* Prerequisites
   * AngularJS
   * Jasmine
* Protractor Jasmine Screenshot Reporter
* Future objectives
   *  Understanding Promises and promise-based tests  
   *  Debugging Protractor Tests

## Introduction   

 - Protractor is an <b>end to end</b> test fram work for <b>AngularJS</b> applications. Protractor runs tests against your app in a <b>real browser</b> from a user prospective.
 - End-to-End test mean and why is important:
  - A methodoloy to test flow of app is performing as expected from start to finish.
  - The entire app is tested in the real world scenario such as communicating with the database, or with other applications. No  mock-ups or additional environment creation which we normally need for unit testing.
  - Prevent production incidents
  - Manual test takes too much time
  
 - Test framwork for AngularJS:
  - Protractor is build on top of WebDriverJs. Its a wrapper for selenium webdriver which is a standard webpage testing tool. 
  - What protractor adds to selenium webdriver, it add the support for some AngularJS functionality.
 
 - Workshop aim:
  -  By the end of this workshop we should be comfertable and productive, with protractor for writing <b>CLEAN</b> tests.
  -  CLEAN test:
    - Easy to read and understand and less maintainable.   
  - How we proceed after the workshop?
  
## Requirements

* Browser e.g. Chrome 

* Node
    - Protractor is NodeJS program so make sure you node and node packagemanager install on your system. 
    - Node intall npm packagemanager automatically which is being used to manage node installations.
    - [NodeJS.org](https://nodejs.org/en/)
    - node --version 

* Selenium Webdriver 
 - For protractor install we also need to install selenium webdriver. 
 - webdriver-manager update (it will install selenium standalone server as well as chrome driver).
 
* JDK 
 - To run Selenium server we require an java development kit.
 - java -version
  
* Protractor 
  - npm install -g protractor
  - protractor --version   
  
* An editor e.g. Visual Studio Code
  
## Prerequisities

There are two main topics in terms of prerequisities skill, AngularJS and [Jasmine] (http://jasmine.github.io/). I set up the learning material if anyone want to go through with any of them.

### Learning materials

* [AngularJS: Get Started] (https://app.pluralsight.com/library/courses/angularjs-get-started/table-of-contents)
* [Introdution to Jasmine](https://app.pluralsight.com/player?course=testing-javascript&author=joe-eames&name=testing-javascript-m2-jasmine&clip=0&mode=live)
* [BDD - Testing AngularJS From Scratch] (https://app.pluralsight.com/player?course=testing-angularjs-from-scratch&author=jesse-liberty&name=tafs-m3&clip=2&mode=live)

## Protractor

### Learning materials

* [Introduction to Protractor, Locating elements and interacting with the angular page] (https://app.pluralsight.com/library/courses/protractor-introduction/table-of-contents)
* [Locating Elements - Writing CSS Expressions] (https://www.youtube.com/watch?v=sHyp7vk7DeE) 
* [Page Objects] (https://www.youtube.com/watch?v=ln_jaC11SAA)
 - Page object provides an API to the page under test. The specs then use this page object to interact with the Angular page.
 - Reduce code duplication.
 - Ecapsutation (decoupled the test logic from the implementation detail).
 - Can be reused across multiple tests
 - Enhance test maintenance.
 
## Protrocator Jasmine Screenshot Reporter

### Learning materials

* [Protractor Screenshot Reporter] (https://www.npmjs.com/package/protractor-jasmine2-screenshot-reporter)

## Debugging

### Learning materials

* [Debugging Protractor Tests] (https://github.com/angular/protractor/blob/master/docs/debugging.md)


 
### Demo

* Demo in VSC:
    * Show the tests and the wrapper objects in Typescript.
    * Step through code. (note: must be targeting `commonjs`)
 

  

