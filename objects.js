var playlist = new Object({Drake: 'In My Feelings'})

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.6ix9ine = 'Fefe'
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Drake
  return playlist
}