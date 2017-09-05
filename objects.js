var playlist = { Beatles: "Blackbird" };

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(Object, artistName) {
  delete Object[artistName]
  return Object
}
