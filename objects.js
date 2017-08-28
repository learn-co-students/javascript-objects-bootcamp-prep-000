var playlist = {
  "The Strokes": "You Only Live Once",
  "Nas": "Ether"
}

function  updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
