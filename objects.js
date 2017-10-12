var playlist = {ABBA:"Dancing Queen"};
//Can't have more than one song from the same artist
function updatePlaylist(playlist,artistName,songTitle){
  Object.assign(playlist, {[artistName]:songTitle});
  return playlist;
}
function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName];
  return playlist;
}
