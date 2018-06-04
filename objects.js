var playlist = { artist: "song title"};
function updatePlaylist(playlist, artistName, song){
  Object.assign(playlist, {[artistName]: song})
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}