var chai = require("chai"),
	sinon = require("sinon"),
	expect = chai.expect;

var paqThisQuestionModule = require("../");


describe("generateQuestionText(qInputs)", function() {
	it('should generate the correct question text for 3 + 5', function() {
		var qInputs = {
	      firstNum : 3, secondNum: 5
	    };
		var res = paqThisQuestionModule.generateQuestionText(qInputs);
		expect(res).to.equal("What is 3 plus 5?");
	});

	it('should generate the correct question text for 2 + 2', function() {
		var qInputs = {
	      firstNum : 2, secondNum: 2
	    };
		var res = paqThisQuestionModule.generateQuestionText(qInputs);
		expect(res).to.equal("What is 2 plus 2?");
	});

});

