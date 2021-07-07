var playlist = {
  'Future Islands': 'Tin Man',
  'Wild Beasts': 'Sweet Spot'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}