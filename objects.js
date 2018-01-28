var playlist = {Ryan: "She Won\'t Wait"}

function updatePlaylist(playlist, artist, song) {
  var addition = {[artist]: song}
  return Object.assign({}, playlist, addition)
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
