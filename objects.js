var playlist={"latha":"song1", "keeravani":"song2","ilayaraja":"song3"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle;
  return playlist;
}
function  removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}