var playlist = {artist:"song"};
function updatePlaylist(playlist, key, value){
  playlist[key] = value;
}
function removeFromPlaylist(playlist, key){
  delete playlist[key];
}
