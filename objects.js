var playlist = {
  'Phil Ochs': "Baby"
}

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { 'Bruno Mars': ['Treasure'] })
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
}