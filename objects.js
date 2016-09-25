var playlist = {
  'Pink Floyd' : 'The Wall',
  'The Eagles' : 'Hotel California',
  'Matchbox Twenty' : 'Long Day'
}

function updatePlaylist(playlist,artistName,songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
