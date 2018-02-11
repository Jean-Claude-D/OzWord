//@ts-check
'use strict'

var word = {
  words: null,

  inputChange: function(event) {
    if (!event) return
    if (event.key !== 'Enter')
      return

    if (word.words === null)
      return

    var str = document.getElementById('searchbar').value
    word.parse(str)
  },

  parse: function(str) {
    str = str.toLowerCase()
    var filteredWords = word.words

    filters.forEach(function(filter) {
      var match = str.match(filter.regex)
      if (match) {
        filteredWords = filter.filter(str, match, filteredWords)
      }
    })

    word.displayResults(filteredWords)
  },

  init: function() {
    word.getJSONFile('words.json', function(err, json) {
      if (err)
        return console.error(err)

      word.words = json.w

      word.displayResults(word.words)
    })

    document.getElementById('searchbar').addEventListener('keyup', word.inputChange)
  },

  displayResults: function(words) {
    var resultAdjectives = words.map(function (v) {
      return v.t === 'adjective'
    })
    var resultAdverbs = words.map(function (v) {
      return v.t === 'adverb'
    })
    var resultNouns = words.map(function (v) {
      return v.t === 'noun'
    })
    var resultVerbs = words.map(function (v) {
      return v.t === 'verb'
    })

    var table = document.getElementById('resultsTable');

    // Clear table
    table.children[0].innerHTML = ''
    var header = table.insertRow();

    var wordText = document.createElement('th')
    wordText.textContent = 'Word'
    header.appendChild(wordText)

    var wordType = document.createElement('th')
    wordType.textContent = 'Word'
    header.appendChild(wordType)

    for (var i = 0; i < words.length; i++) {
      if (i > 200) break

      var row = table.insertRow();
      var wordText = document.createElement('td')
      wordText.textContent = words[i].w
      row.appendChild(wordText)

      var wordType = document.createElement('td')
      wordType.textContent = words[i].t
      row.appendChild(document.createTextNode(words[i].t))
    }


    document.getElementById('results').textContent = results.join(', ')
  },

  getJSONFile: function(file, callback) {
    var c = new XMLHttpRequest()
    c.open('GET', file)
    c.onreadystatechange = function() {
      if (c.readyState !== 4) return

      if (c.status === 200) { // OK
        var json
        try {
          json = JSON.parse(c.responseText)
        } catch (e) {
          callback(e, null)
        }

        callback(null, json)

      } else {
        callback(new Error(c.status + ''), null)
      }
    }
    c.send()
  }
}

window.onload = word.init
