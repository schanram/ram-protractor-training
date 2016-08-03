beforeEach(function() {
  
    jasmine.addMatchers({
      toBeEmpty: () => {
          return {
            compare: function(actual:string, expected:string) {
              let ret = {
                  pass: actual === "",
                  message: "Expected string" + (this.pass ? "" : " not") + " empty" 
              };
              return ret;
            }
          };
        }
    });
});

// var customMatcher = {
//   toBeGoofy: function(util:any, customEqualityTesters:any) {
//     return {
//       compare: function(actual:protractor.ElementFinder, expected:any) {

//         if (expected === undefined) {
//           expected = '';
//         }
//         var result = {};
//         if (result.pass) {
//           result.message = "Expected " + actual + " not to be quite so goofy";
//         } else {
//           result.message = "Expected " + actual + " to be goofy, but it was not very goofy";
//         }

//         return result;
//       }
//     };
//   }
// };