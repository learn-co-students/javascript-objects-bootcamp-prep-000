var playlist = {
  'Bruno Mars': '24K Magic'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {artistName: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
}
