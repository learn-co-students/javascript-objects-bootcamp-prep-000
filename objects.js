var playlist = {
  Deadmau5: "The reward is Cheese"
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return {}
}
