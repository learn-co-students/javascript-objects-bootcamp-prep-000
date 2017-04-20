var playlist = { 'Dire Straits': 'Why Worry',
                 Queen: 'Radio Ga Ga'}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
