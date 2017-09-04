var playlist = {
  "Walk off the Earth": "Red Hands",
  "Jonathan Coulton": "Code Monkey"
}

function updatePlaylist(playlistObject, artistName, songTitle) {
  return Object.assign({}, {[artistName]: songTitle})
}

function removeFromPlaylist(playlistObject, artistName) {
  delete playlistObject[artistName]
  return playlistObject
}
