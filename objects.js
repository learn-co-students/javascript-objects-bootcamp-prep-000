var playlist = {
  Chopin: 'Piano Sonata',
  Beethoven: 'Moonlight',
  Mozart: 'Eine Kleine NachtMusik'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
      delete playlist[artistName]
      return playlist
}
