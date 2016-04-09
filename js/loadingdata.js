/*
 * Some (a decent bit) of this code was adapted from the generic loading screen
 * https://github.com/glua/load-seed/blob/master/app/scripts/main.js
 * Special thanks to Garry for these awesome resources
*/

(function () {
  var LOADER = {}

  LOADER.init = function () {
    // Set to false to disable progress text
    this.progressTextEnabled = true

    this.filesNeeded = 1
    this.filesTotal = 1

    this.currentState = ''

    this.percentText = document.getElementById('percentCompleted')
  }

  LOADER.setFilesTotal = function (numFiles) {
    this.filesTotal = Math.max(0, numFiles)
  }

  LOADER.setFilesNeeded = function (numFiles) {
    this.filesNeeded = Math.max(0, numFiles)
    this.updateProgress()
  }

  LOADER.updateProgress = function () {
    var filesRemaining = Math.max(0, this.filesTotal - this.filesNeeded)
    var progress = (this.filesTotal > 0) ? (filesRemaining / this.filesTotal) : 1

    progress = Math.round(progress * 100)

    this.percentText.innerText = progress + '%'
  }

  LOADER.onStatusChanged = function (status) {
    if (status === 'Sending client info...') {
      this.filesNeeded = 0
      this.updateProgress()
    }
  }

  LOADER.init()
  window.LOADER = LOADER

  /*
    Called at the start

    total- Total number of files the client will have to download.
  */
  window.SetFilesTotal = function (total) {
    LOADER.setFilesTotal(total)
  }

  /*
    Called when the number of files remaining for the client to download changes.

    needed- Number of files left for the client to download.
  */
  window.SetFilesNeeded = function (needed) {
    LOADER.setFilesNeeded(needed)
  }

  /*
     Called when something happens. This might be "Initialising Game Data",
       "Sending Client Info", etc.
    */
  window.SetStatusChanged = function (status) {
    LOADER.onStatusChanged(status)
  }
}())
