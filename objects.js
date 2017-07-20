var playlist = {"Ed Sheeran": "Perfect"}
function updatePlaylist (playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]:songTitle})
}
function removeFromPlaylist(playlist1, artistName) {
  delete playlist1[artistName];
  return playlist1
}
