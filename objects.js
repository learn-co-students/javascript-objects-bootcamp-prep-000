var playlist = {
  'Phil Ochs': "Baby"
}

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { 'Bruno Mars': ['Treasure'] })
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}

