var playlist = {
  "Foo Fighters": "Rope",
  "U2": "One"
}
function updatePlaylist(playlist, key, value) {
  playlist[key] = value;
  return playlist;
}
function removeFromPlaylist(playlist, key) {
  delete playlist[key];
  return playlist;
}
