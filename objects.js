var playlist = {};
var key = "artist";
var value;
playlist[key] = value;
function updatePlaylist( playlist, key, value) {
  playlist[key] = value;
  return playlist;
}
function removeFromPlaylist(playlist, key) {
  delete playlist[key];
  return playlist
}