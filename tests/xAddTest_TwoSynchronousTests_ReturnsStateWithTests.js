//xAddTest_TwoSynchronousTests_ReturnsStateWithTests.js: Testing logic.

define([
	"xAddTests",
	"TestSuite"
], function(
	xAddTests,
	TestSuite
) {
	return {
		"Name":"xAddTest_TwoSynchronousTests_ReturnsStateWithTests",
		"Input": [{
			"Name": "Test1",
			"Input": undefined,
			"Function": function() { return true; },
			"ExpectedOutput": true
		},{
			"Name": "Test2",
			"Input": undefined,
			"Function": function() { return true; },
			"ExpectedOutput": true
		}],
		"Function": function( Input ) {
			return xAddTests.call( new TestSuite({ "MethodUnderTest": "Function" }), Input );
		},
		"Comparator": { "Object": true },
		"Debug": false,
		"ExpectedOutput": {
			"MethodUnderTest": "Function",
			"TestCollection": [{"Name": "Test1"},{"Name": "Test2"}],
			"AsyncTestCollection": [],
			"Debug": true
		}
	};
});
