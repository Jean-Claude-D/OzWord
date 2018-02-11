"use strict"
var negateList = ["no", "not", "isn't", "aren't", "haven't", "without"];

var typeCheck = {}

typeCheck.main = function (userInput) {

  var checking = '';

  var splitUser = userInput.split(' ');

  checking += checkType(splitUser);

  return checking;
}

function checkType(userInputArray) {
  var sumCondition = '';
  for (var i = 0; i < userInputArray.length; i++) {

    var word = userInputArray[i].replace(/[.,?'"]/g, "").toLowerCase();


    if (word === "noun" || word === "nouns") {

      if (isNegate(userInputArray[i - 1]) || isNegate(userInputArray[i - 2])) {

        sumCondition += " !noun";
      } else {
        sumCondition += " noun";
      }
    }
    if (word === "verb" || word === "verbs") {

      if (isNegate(userInputArray[i - 1]) || isNegate(userInputArray[i - 2])) {

        sumCondition += " !verb";
      } else {

        sumCondition += " verb";
      }
    }
    if (word === "adjective" || word === "adjectives") {

      if (isNegate(userInputArray[i - 1]) || isNegate(userInputArray[i - 2])) {

        sumCondition += " !adjective";
      } else {
        sumCondition += " adjective";
      }
    }
    if (word === "adverb" || word === "adverbs") {

      if (isNegate(userInputArray[i - 1]) || isNegate(userInputArray[i - 2])) {

        sumCondition += " !adverb";
      } else {
        sumCondition += " adverb";
      }
    }
  }
  return sumCondition;
}

function isNegate(str) {
  if (!str) return false

  var negateList = ["no", "not", "isn't", "aren't", "don't", "without"];

  for (var i = 0; i < negateList.length; i++) {

    if (negateList[i] === str.toLowerCase()) {

      return true;
    }
  }
  return false;
}
