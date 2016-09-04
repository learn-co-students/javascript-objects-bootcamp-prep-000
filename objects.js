var playlist = { U2: "It's a beautiful day"};
function updatePlaylist(playlist,artistName,songTitle) {
  playlist[artistName] = songTitle
  return playlist;
}
function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName]
  return playlist;
}
