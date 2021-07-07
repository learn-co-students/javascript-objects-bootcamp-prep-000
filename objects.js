
var playlist = {bon_iver:'stacks'}

function updatePlaylist(playlist, artist, name) {
  playlist[artist] = name
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
