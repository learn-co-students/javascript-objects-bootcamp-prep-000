
var playlist = {'The Beatles': 'Let it Be', 'Billy Joel': 'Piano Man'}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
