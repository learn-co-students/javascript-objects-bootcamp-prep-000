var playlist = {Object: 'playlist'};
function updatePlaylist (playlist, artistName, songTitle) {
  var playlist;
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}
