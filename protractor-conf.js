var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

exports.config = {
  allScriptsTimeout: 40000,
  
  specs: [
    'build/test/end2end/**/*.js'
  ],
  
  capabilities: {    
    browserName: 'chrome',   
    // Run tests in parallel - Decrease execution time by sharing test files 
    // between the multiple browser instances.  
    // shardTestFiles: true,
    // maxInstances: 2    
  },
  
  chromeOnly: true,
  framework: 'jasmine',
  
    // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: 'http://localhost:9000/testapp/',

  // Options to be passed to Jasmine node.
  jasmineNodeOpts: {
    showColors: true,        
    includeStackTrace: true
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
    browser.ignoreSynchronization = true;

    var disableNgAnimate = function() {
      angular.module('disableNgAnimate', []).run(['$animate', function($animate) {
        $animate.enabled(false);
      }]);
    };
    browser.addMockModule('disableNgAnimate', disableNgAnimate);
  }   
}
