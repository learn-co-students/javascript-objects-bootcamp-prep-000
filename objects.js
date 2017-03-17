var playlist = {
  'Tube & Berger': 'imprint of pleasure',
  'Ed Sheeran': 'Shape of You',
  Causes: 'Teach Me How',
  Lorde: 'Liability'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
