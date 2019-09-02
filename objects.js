var playlist = {
  artistName: 'songTitle'
}

function updatePlaylist(playlist, artistName, songTitle) {
  var playlist2 = Object.assign({}, playlist, {[artistName]: songTitle})
  return playlist2
}

function removeFromPlaylist(songTitle, artistName) {
  delete playlist.artistName
  return playlist
}
