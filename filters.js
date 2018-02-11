//@ts-check
'use strict'

/**
 * @typedef {Object} Word
 * @property {String} word The word itself
 * @property {String} type The type of the word
 * @property {Number} syllables The number of syllables in the word
 */

var filters = [
  {
    /** The regex to use to match */
    regex: /starts?(?: with)?\s+(?:['"](.*)['"]|(\w+))/,

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
        return v.word.indexOf(start) === 0
      })
    }
  },

  // Inverse of the above, checks if a word ends with the provided string
  {
    regex: /ends?(?: with)?\s+(?:['"](.*)['"]|(\w+))/,

    filter: function (str, args, words) {
      var end = args[1] ? args[1].toLowerCase() : args[2].toLowerCase()

      return words.filter(function (v) {
        var w = v.word
        return w.substring(w.length - end.length, w.length) === end
      })
    }
  }
]
