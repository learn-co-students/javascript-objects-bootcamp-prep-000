var playlist = {
  'Lydia': 'Sleep Well',
  'The Smiths': 'This Night Has Opened My Eyes'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}
