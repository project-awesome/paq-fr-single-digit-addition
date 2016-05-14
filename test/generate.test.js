

var chai = require("chai"),
	sinon = require("sinon"),
	expect = chai.expect,
	randomStream = require("random-bits");

var paqThisQuestionModule = require("../");

describe("generate(randomStream, params)", function() {

	var genQInputsStub, genInputStub, genAnswerStub;
	var rs, params, question;

	beforeEach(function() {
			genQInputsStub = sinon.stub(paqThisQuestionModule, 'generateQInputs')
								.returns("qInputs-double");
			genQuestionTextStub = sinon.stub(paqThisQuestionModule, 'generateQuestionText')
								.returns("questionText-double");
			genAnswerStub = sinon.stub(paqThisQuestionModule, 'generateAnswer')
								.returns("answer-double");
		    rs = new randomStream.random(7);
			params = {};
			question = paqThisQuestionModule.generate(rs, params);
	});

	afterEach(function() {
		genQInputsStub.restore();
		genQuestionTextStub.restore();
		genAnswerStub.restore();
	});

	describe('title', function() {
		it('should equal the question module\'s title', function(){
			expect(question.title).to.equal("Single Digit Addition");
			expect(question.title).to.equal(paqThisQuestionModule.title);
		});
	});
	
	describe('format', function() {
		it('should be "free-response"', function() {
			expect(question.format).to.equal("free-response");
		});
	});

	describe('question', function() {
		it('should be what generateQuestionText returns', function() {
			expect(genQInputsStub.calledWith(rs, params)).to.be.true;
			expect(genQuestionTextStub.calledWith("qInputs-double")).to.be.true;
			expect(question.question).to.equal("questionText-double");
		});
	});

	describe('answer', function() {
		it('should be whatever generateAnswer returns', function() {
			expect(genAnswerStub.calledWith("qInputs-double")).to.be.true;
			expect(question.answer).to.equal("answer-double");
		});
	});
});




