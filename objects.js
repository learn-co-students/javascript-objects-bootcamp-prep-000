var playlist = {
  'Beyonce': 'Love on Top',
  'Pharrell Williams': 'Happy',
  'Michael Jackson': "Don’t Stop 'Til You Get Enough"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
}
