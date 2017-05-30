var playlist = {
  'nickelback': 'photograph',
  Simple Plan: 'untitled'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}
