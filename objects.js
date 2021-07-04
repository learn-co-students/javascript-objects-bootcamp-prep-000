var playlist = new Object ({Bonerama: "When the Levee Breaks"});
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
}
function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName];
  return playlist
}