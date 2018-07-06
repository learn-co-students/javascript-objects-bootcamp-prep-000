var playlist = {williams: 'Hey Steve'}

function updatePlaylist(thePlaylist, artistName, songTitle) {
  thePlaylist[artistName] = songTitle
}

function removeFromPlaylist(thePlaylist, artistName) {
  delete thePlaylist[artistName]
}