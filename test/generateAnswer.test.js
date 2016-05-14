var chai = require("chai"),
	sinon = require("sinon"),
	expect = chai.expect;

var paqThisQuestionModule = require("../");


describe("generateAnswer(qInputs)", function() {
	it('should generate the correct answer for 3+5', function() {
		var qInputs = {
			firstNum : 3, secondNum: 5 
	    };
		var res = paqThisQuestionModule.generateAnswer(qInputs);
		expect(res).to.equal(8);
	});

	it('should generate the correct answer for 2+2', function() {
		var qInputs = {
			firstNum : 2, secondNum: 2 
	    };
		var res = paqThisQuestionModule.generateAnswer(qInputs);
		expect(res).to.equal(4);
	});


});