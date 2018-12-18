var playlist = {
  'The Roots': 'You Got Me',
  'Animal Collective': 'Man of Oil'
}

function updatePlaylist(playlist, artistName, song) {
  playlist[artistName] = song
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}


