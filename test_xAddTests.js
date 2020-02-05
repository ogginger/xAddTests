//test_xAddTests.js: Testing Logic.

define(["tests/xAddTest_TwoSynchronousTests_ReturnsStateWithTests","TestSuite","log","xAddTests"], function(xAddTest_TwoSynchronousTests_ReturnsStateWithTests,TestSuite,log,xAddTests) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_xAddTests initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "xAddTests" );
            xTestSuite.add( xAddTest_TwoSynchronousTests_ReturnsStateWithTests );
      xTestSuite.test();
    }
  });
});