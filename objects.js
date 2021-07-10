var playlist = {
  JayZ: "99 Problems"
}
function updatePlaylist(playlist, name, title) {
  playlist[name] = title;
  return playlist;
}
function removeFromPlaylist(playlist, name) {
  delete playlist[name];
  return playlist;
}