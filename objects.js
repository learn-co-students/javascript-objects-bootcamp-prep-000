var playlist = {
  'Aerosmith': 'Sweet Emotion',
  'Kansas': 'Carry on Wayward Son'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
