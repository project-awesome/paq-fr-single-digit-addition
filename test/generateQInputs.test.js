var chai = require("chai"),
	sinon = require("sinon"),
	expect = chai.expect,
	randomStream = require("random-bits");

var paqChangeOfBaseFR = require("../");


describe("generateQInputs(randomStream, params)", function() {
	it("should generate a reasonable question", function() {
	    var rs = new randomStream.random(5);
		var qInputs = paqChangeOfBaseFR.generateQInputs(rs, {});

		expect(qInputs.firstNum).to.be.a('number');
		expect(qInputs.firstNum <= 9).to.be.true;
		expect(qInputs.firstNum >= 1).to.be.true;
		expect(qInputs.secondNum).to.be.a('number');
		expect(qInputs.secondNum <= 9).to.be.true;
		expect(qInputs.secondNum >= 1).to.be.true;
	});
});