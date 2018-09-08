var playlist = {"michael jackson": "smooth criminal"}

function updatePlaylist(playlist, artist, title) {
  playlist[artist] = title
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
}