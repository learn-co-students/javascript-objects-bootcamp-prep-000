var playlist = {Wu_Tang: "Slow Blues"}
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle})
}
function removeFromPlaylist(playlist, artistName) {
  return delete playlist[artistName]
}