var playlist = { song: 'blah' }

function removeFromPlaylist(playlist, artistName) {
  let a = Object.assign({}, playlist)
  delete a[artistName]
  return a
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}
