//@ts-check
'use strict'

/**
 * @typedef {Object} Word
 * @property {String} w The word itself
 * @property {String} t The type of the word
 * @property {Number} s The number of syllables in the word
 */

var filters = [
  {
    /** The regex to use to match */
    regex: /(?:starts?|begins?)(?: with)?\s+(?:['"](.*)['"]|(\w+))/,

    /**
     * Filter the current list of words
     *
     * @param {String}   str   The input string of the user
     * @param {String[]} args  The capture groups of the array, after doing <String>.match
     * @param {Word[]} words The current list of words, may be already filtered by other filters
     * @returns {Word[]} A new array of words that match
     */
    filter: function(str, args, words) {
      var start = args[1] ? args[1].toLowerCase() : args[2].toLowerCase()

      return words.filter(function(v) {
        return v.w.indexOf(start) === 0
      })
    }
  },

  // Inverse of the above, checks if a word ends with the provided string
  {
    regex: /ends?(?: with)?\s+(?:['"](.*)['"]|(\w+))/,

    filter: function (str, args, words) {
      var end = args[1] ? args[1].toLowerCase() : args[2].toLowerCase()

      console.log(end)
      return words.filter(function (v) {
        var w = v.w
        return w.substring(w.length - end.length, w.length) === end
      })
    }
  },
  
  // Checks for word length
  {
	  regex: /(\d+) (?:[cC]haracters?|[lL]etters?)/,
	  
	  filter: function (str, args, words) {
		  return words.filter(function (v) {
			  return v.w.length === +args[1];
		  })
	  }
  },
  
  // Checks for syllabe count
  {
	  regex: /(\d+) (?:[sS]yllables?)/,
	  
	  filter: function (str, args, words) {
		  return words.filter(function (v) {
			  var currChars = v.w.split('');
			  var vowels = ["a", "e", "i", "o", "u", "y"];
			  var syllableCount = 0;
			  
			  for(var i = 0; i < currChars.length; i++) {
				  for(var j = 0; j < vowels.length; j++) {
					  if(currChars[i].toLowerCase() === vowels[j].toLowerCase() && !(i == currChars.length - 1 && currChars[i] == 'e')) {
						  syllableCount++;
						  
						  //skip identical chars
						  for(; i < currChars.length - 1 &&
						  currChars[i].toLowerCase() === currChars[i + 1].toLowerCase(); i++);
					  }
				  }
			  }
			  
			  return syllableCount === +args[1];
		  }) // 
	  }
  }
]
