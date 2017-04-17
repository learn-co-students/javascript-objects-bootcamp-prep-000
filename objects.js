playlist = {
  "Prince": "Kiss",
  "Will Sessions": "The World is Yours"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  playlist.delete(artistName)
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}