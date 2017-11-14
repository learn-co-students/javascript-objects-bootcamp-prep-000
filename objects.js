var playlist = {
  milkyChance: 'Ego'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
  return Object.assign({})
}
