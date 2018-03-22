var playlist = {
  'Cardi B': 'Bodack Yellow',
  Kanye: 'Workout Plan'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
 return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}