var playlist = {
  "Tripping Daisy":"I Got a Girl",
  "Cake":"Going the Distance"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
}
