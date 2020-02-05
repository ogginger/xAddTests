//xAddTests.js: Functional Logic.
//What
  //A function for adding multiple tests to the test suite.
//Why
  //Because it's more efficient than adding one at a time.
//Data
  //Model: TestSuite
//Scenario
  //TestSuite.xAddTests([ test1, test2 ]);
//Prototype
 //xTestSuite.xAddTest( Array Of Objects ) => Returns State
//TDD
define([], function() {
  return function( Input ) {
    var xTestSuite = this;
    Input.forEach(function( test ) {
      xTestSuite.add( test );      
    });
    return xTestSuite;
  };
});
