var playlist = { artistName: 'songTitle' }
function updatePlaylist (playlist, key, val) {
  return Object.assign({}, playlist, {[key]: val})
}
function removeFromPlaylist (playlist, val) {
  delete playlist.Kanye
  return playlist
}
