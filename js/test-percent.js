// Use this script to make sure the percentage script is working
// Just open up the developer console and paste this code in

var totalFiles = 1046
var dlDelay = 10

window.SetFilesTotal(totalFiles)

function UpdateDLCount (numDownloaded) {
  if (numDownloaded <= totalFiles) {
    window.SetFilesNeeded(totalFiles - numDownloaded)
    window.setTimeout(function () { UpdateDLCount(numDownloaded + 1) }, dlDelay)
  }
}

UpdateDLCount(0)
