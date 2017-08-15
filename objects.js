var playlist = new Object({Lunasa:'Down by the Sally gardens', Danu:'Dublin Town'})

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, {[artist]:song})
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
