/* global $ */

var switchTime = 4 * 1000
var phaseDuration = 0.5 * 1000
var findThreshold = 10

var usedPhrases = []
var phrases = []

$(document).ready(function () {
  // set up our array of phrases
  setupPhrasesArray()

  // start cycling through the phrases
  window.setInterval(function () {
    insertRandomPhrase()
  }, switchTime)
})

function setupPhrasesArray () {
  $.getJSON('phrases.json', function (json) {
    for (var key in json) {
      if (json.hasOwnProperty(key)) {
        var item = json[key]
        phrases.push(item)
      }
    }
  })
}

function insertRandomPhrase () {
  $('#phrases').fadeOut(phaseDuration, function () {
    $('#phrases').text(getRandomPhrase()).fadeIn(phaseDuration)
  })
}

function getRandomPhrase () {
  // Precondition: if the size of our "usedphrases" array is the same as
  // the size of our "phrases" array, we've used all of our phrases.
  // If this is the case, wipe the "usedphrases" array and start from scratch.
  if (usedPhrases.length === phrases.length) {
    usedPhrases = []
  }

  // Try "findThreshold" number of times to find a phrase we haven't shown the
  // user yet.
  for (var i = 0; i < findThreshold; ++i) {
    var index = Math.floor(Math.random() * phrases.length)

    // Check to see if we have already used the phrase
    // There's no "else" case, because we should just keep going if we already
    // used the phrase we found
    if (usedPhrases.indexOf(index) === -1) {
      usedPhrases.push(index)
      return phrases[index]
    }
  }

  return phrases[Math.floor(Math.random() * phrases.length)]
}
