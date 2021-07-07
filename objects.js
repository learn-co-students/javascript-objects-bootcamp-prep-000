var playlist = {
  'Foo Fighters': 'Everlong',
  Prince: 'Purple Rain'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}
