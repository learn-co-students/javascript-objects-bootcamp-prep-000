var playlist = {}

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({playlist},{artistName:songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  remove playlist[artistName]
}
