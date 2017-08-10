var playlist = {"mandy moore": "cry"}

function updatePlaylist(playlist, artist, song) {
  return Object.assign(playlist, {[artist]: song})
}

function removeFromPlaylist(playlist, artist, song) {
  delete playlist[artist]
  return playlist
}
