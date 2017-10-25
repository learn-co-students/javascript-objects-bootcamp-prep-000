
var playlist = { "artist1" : "song 1"}

function updatePlaylist(playlist, artist, song) {
  return Object.assign(playlist, { [artist]: song})
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
