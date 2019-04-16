var playlist = {
  "Katy Perry": "Teenage Dream",
  "Kanye West": "Stronger",
  "Coldplay":   "Charlie Brown"
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  result = playlist
  delete result[artistName]
  return result
}
