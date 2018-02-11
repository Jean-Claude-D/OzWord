var parsedRequest = {};
parsedRequest.split = " ";
parsedRequest.not = "!";

var wordCond = {};
wordCond.n = {name: "noun", func: function (toCheck) {
	return toCheck.type === "noun";
}};
wordCond.notN = {name: "noun", func: function (toCheck) {
	return toCheck.type === "noun";
}};
wordCond.v = {name: "verb", func: function (toCheck) {
	return toCheck.type === "verb";
}};
wordCond.adv = {name: "adverb", func: function (toCheck) {
	return toCheck.type === "adverb";
}};
wordCond.adv = {name: "adverb", func: function (toCheck) {
	return toCheck.type === "adjective";
}};
wordType.not = "!";

var allWords;

function filterWords(conditions[]){
	var validWords = [];
	
	wordsLoop : for(int i = 0; i < allWords.length; i++) {
		conditionsLoop : for(int j = 0; j < conditions.length; i++) {
			if(!conditions[j](allWords[i])) {
				continue wordsLoop;
			}
		}
		validWords[validWords.length] = allWords[i];
	}
	
	return validWords;
}

function selectConditions(userRequest) {
	var stringConditions = userRequest.split(parsedRequest.split);
	var conditions = [];
	
}

function isNotNoun(toCheck) {
	return !isNoun(toCheck);
}