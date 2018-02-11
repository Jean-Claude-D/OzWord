"use strict"
var negateList = ["no", "not", "isn't", "aren't", "haven't", "without"];

var userInput = "A word that is not a verb, but is an adjective or noun";

window.onload = main;

function main () {

  console.log("aaaaaaaaaaaaaaaa");



  var splitUser = userInput.split(' ');

  console.log(splitUser);


  var checking = "{" + checkType(splitUser) + "}";

  console.log(checking);

  console.log("b");
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
