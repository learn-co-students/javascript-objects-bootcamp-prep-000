var playlist = {
  Rihanna: 'Rude Boy',
  'Wiz Khalifa': 'Black and Yellow'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}