exports.title = "Single Digit Addition";

exports.paramSchema = {
    title: 'fr-single-digit-addition',
    type: 'object',
    additionalProperties: false,
};

exports.generateQuestionText = function (qInputs){ 
    return "What is " + qInputs.firstNum + " plus " + qInputs.secondNum + "?";
}

exports.generateQInputs = function(randomStream, params) {
    
    var qInputs = {
        firstNum: randomStream.randIntBetweenInclusive(1,9),
        secondNum: randomStream.randIntBetweenInclusive(1,9)
    };
    return qInputs;
}

exports.generateAnswer = function(qInputs) {
    return qInputs.firstNum + qInputs.secondNum; 
}

exports.generate = function(randomStream, params) {

    var qInputs = exports.generateQInputs(randomStream, params);
    var question = {
        title : exports.title,
        format : 'free-response',
        question : exports.generateQuestionText(qInputs),
        answer : exports.generateAnswer(qInputs)
    };
	return question;
};
