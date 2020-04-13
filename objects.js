var playlist = {
  'Mozart': 'Sonata for 2 Pianos in D Major'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
}
