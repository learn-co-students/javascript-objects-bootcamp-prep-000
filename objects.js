var artistName
var songTitle

var playlist = { [artistName]: songTitle }

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { [artistName]: songTitle })
  return playlist
}

function removeFromPlaylist(playlist, artistname) {
  delete playlist[artistName]
  return playlist
}