var playlist = {
  JohnColtrane: "A Love Supreme"
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}
