playlist = {
  'Elvis Presley': 'Blue Suede Shoes',
  'The Beatles': 'Hello',
  'Michael Jackson': 'Thriller'
  }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
