var playlist = {
  Jon_Foreman: "Your Love is Strong"
}
var artistName
var songTitle
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}