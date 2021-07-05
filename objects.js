var playlist = {
  artist: 'song'
}

function updatePlaylist(playlist, name, song) {
  playlist[name] = song
  return playlist
}

function removeFromPlaylist(playlist, name) {
  delete playlist[name];
  return playlist
}