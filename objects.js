  var playlist = {hello: 'there' }

function objects() {

return playlist

}

function updatePlaylist(playlist, artistName, songTitle) {
  var playlist = {[artistName] : songTitle}
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
