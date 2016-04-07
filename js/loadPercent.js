/* global $ */

var progressTextEnabled = true
var totalFiles = 1
var acquiredFiles = 1

/*
  Called at the start

  total- Total number of files the client will have to download.
*/
function SetFilesTotal (total) {
  if (total !== 0) {
    totalFiles = total
    acquiredFiles = 0
  }
}

/*
  Called when the number of files remaining for the client to download changes.

  needed- Number of files left for the client to download.
*/
function SetFilesNeeded (needed) {
  // Don't do anything if we don't want to show progress.
  if (!progressTextEnabled) {
    return
  }

  acquiredFiles = totalFiles - needed
  $('percentCompleted').text(Math.floor(acquiredFiles / totalFiles))
}
