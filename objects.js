var playlist = {
  'Phil Ochs': 'Here\'s to the State of Mississippi',
  Kanye: 'Gold Digger'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}