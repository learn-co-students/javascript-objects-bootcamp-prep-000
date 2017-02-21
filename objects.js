var playlist = {
  artist: 'Tony Bennet',
  song: 'The Way You Look Tonight'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]

  return playlist
}
