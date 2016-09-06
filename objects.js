var playlist = {
  'In This Moment': 'Fighter',
  'Marilyn Manson': 'Sweet Dreams',
  'Meg Myers': 'Lemon Eyes'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]

  return playlist
}
