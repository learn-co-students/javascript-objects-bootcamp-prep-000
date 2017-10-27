var playlist = {madonna:"Like a Virgin"}
function updatePlaylist(objPL,artist,song) {
  return Object.assign({}, objPL, {[artist]: song})
}
function removeFromPlaylist(playlist,artist) {
  delete playlist[artist]
  return playlist
}
