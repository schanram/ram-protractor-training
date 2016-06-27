var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

exports.config = {
  allScriptsTimeout: 40000,
  
  specs: [
    //"./build/test/end2end/js/login/*.js",
    //"./build/test/end2end/js/smoke/*.js",
    "./build/test/end2end/js/**/*.js",
  ],
  
  suites: {
    full: './build/test/end2end/js/**/*.js',
    smoke: './build/test/end2end/js/smoke/*.js',
  },
  
  capabilities: {    
    browserName: 'chrome',   
    // Run tests in parallel - Decrease execution time by sharing test files 
    // between the multiple browser instances.  
    // shardTestFiles: true,
    // maxInstances: 2    
  },
  
  chromeOnly: true,
  framework: 'jasmine',
  
  // Boolean. If true, Protractor will connect directly to the browser Drivers
  // at the locations specified by chromeDriver and firefoxPath. Only Chrome
  // and Firefox are supported for direct connect.
  directConnect: true,
  
  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: "http://localhost/ram.series5.spa/",

  // Options to be passed to Jasmine node.
  jasmineNodeOpts: {
    showColors: true,        
    includeStackTrace: true,
    defaultTimeoutInterval: 20000
  },
  
  onPrepare: function(){
    jasmine.getEnv().addReporter(
        new HtmlScreenshotReporter({
          cleanDestination: true,
          dest: './build/test/end2end/reports',
          filename: 'e2e.html',
          ignoreSkippedSpecs: true,
          showSummary: true,
          
          // reportOnlyFailedSpecs: true,   
          // captureOnlyFailedSpecs: true
        })
      );

    var disableNgAnimate = function() {
      angular.module('disableNgAnimate', []).run(['$animate', function($animate) {
        $animate.enabled(false);
      }]);
    };
    browser.addMockModule('disableNgAnimate', disableNgAnimate);
  }   
}
