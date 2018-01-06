
var playlist = {
  eminiem: "rivers"
}

function updatePlaylist (list, artist, song) {
  return Object.assign({}, {[artist]:song})
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
