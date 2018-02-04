var playlist = {'drugs': 'eden'}

function updatePlaylist(playlist, eden, drugs) {
  playlist[eden] = drugs;
  return playlist
}

function removeFromPlaylist(playlist, eden) {
  delete playlist[eden]
  return playlist
}
