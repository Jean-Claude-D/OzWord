"use strict"
var negateList = ["no", "not", "isn't", "aren't", "haven't", "without"];

var userInput = "A word that is not a verb, but is an adjective or noun, have 5 characters and 2 syllables";

window.onload = main;

function main () {

  var splitUser = userInput.split(' ');

  var checking = checkType(splitUser);

  checking = checkWordLength(splitUser);
}

function checkType(userInputArray) {

  var sumCondition = '';
  for (var i = 0; i < userInputArray.length; i++) {

    if (userInputArray[i].toLowerCase() === "noun") {

      if (isNegate(userInputArray[i - 1]) && isNegate(userInputArray[i - 2])) {

        sumCondition += " !noun";
      }
      else {
        sumCondition += " noun";
      }
    }
     if (userInputArray[i].toLowerCase() === "verb") {

      if (isNegate(userInputArray[i - 1]) && isNegate(userInputArray[i - 2])) {

        sumCondition += " !verb";
      }
      else {
        sumCondition += " verb";
      }
    }
    if (userInputArray[i].toLowerCase() === "adjective") {

      if (isNegate(userInputArray[i - 1]) && isNegate(userInputArray[i - 2])) {

        sumCondition += " !adjective";
      }
      else {
        sumCondition += " adjective";
      }
    }
    if (userInputArray[i].toLowerCase() === "adverb") {

      if (isNegate(userInputArray[i - 1]) && isNegate(userInputArray[i - 2])) {

        sumCondition += " !adverb, ";
      }
      else {
        sumCondition += " adverb, ";
      }
    }
  }
  return sumCondition;
}

function isNegate(word) {

  for (var i = 0; i < negateList.length; i++) {

    if (negateList[i] === word.toLowerCase()) {

      return true;
    }
  }
  return false;
}

function checkWordLength (userInputArray) {

  var sumCondition = '';

  for (var i = 0; i < userInputArray.length; i++) {

    if (userInputArray[i] === "characters" || userInputArray[i] === "letters"
        || userInputArray[i] === "character" || userInputArray[i] === "character") {

        sumCondition += ' ' + userInputArray[i - 1] + 'C';
    }

    if (userInputArray[i] === "syllable" || userInputArray === "syllables") {

        sumCondition += ' ' + userInputArray[i - 1] + 'S';
    }
  }
  return sumCondition;
}
