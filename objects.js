var playlist = {
  'James Taylor': 'fire and rain'
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
