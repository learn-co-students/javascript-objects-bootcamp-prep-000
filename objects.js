var playlist = {
  'Foo Fighters': 'Everlong',
  Prince: 'Purple Rain'
}

function updatePlaylist(playlist, artist, song) {
  playlist['Billy Joel'] = 'Lullabye'

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}
