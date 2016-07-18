# Overview
The (in)complete workshop for picking up Protractor - end to end testing for AngularJs

## Getting started

1. Follow the install instructions.
2. Work through the [trainging materials](training-guide.md)

## Install instructions

0. Remove old version of Typescript (only applies to machines with Visual Studio installed)
    1. Browse to folder: C:\Program Files (x86)\Microsoft SDKs\TypeScript
    2. Delete any folder with a version number < 2.0 (eg 1.0)
1. Install global tooling:
    1. git
        - git --version 
    2. [JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
        - java -version
        - Keep in mind The new installation takes effect in each new command window.
    3. [nodejs and npm](https://nodejs.org/en/) 
        - node --version
    4. [Visual Studio Code](https://code.visualstudio.com/Download)
2. fork this repo
3. clone the forked repo locally
4. open a cmd prompt with the current directory set to the locally cloned directory
   at this command prompt install project locally: `npm run update-webdriver`
    * installs both npm modules and any referenced typescript definition files

## Running project

**The tests run against an Angular application. To start the Angular application run the following command:

`npm run server`

**Compile typescript and run tests from the command prompt** 

`npm start`

* runs the `tsc` tool using the options defined in the `tsconfig.json`
* `tsc` is configured to watch for changes to your typescript files and recompile them
* runs the tests

**Run tests only**

`npm test`

**Compile typescript only**

`npm run tsc`

**Compile typescript when files change**

`tsc run tsc:w`

## Visual Studio code integration

**Compiling**

The task runner has been configured to run the typescript compiler using the shortcut keys: 

`CTLR+SHIFT+B`

This is equivalent as running `tsc` at the command line

**Debugging**

VSC has been configured to debug the javascript files. Press the shortcut key: `F5`

However, you will find that before you can debug the code you will need to ensure that typescript file compiles into the javascript files. To do this:

1. Compile the code (tip: `CTLR+SHIFT+B`)

