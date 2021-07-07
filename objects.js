var playlist={artistname:"song"};
function updatePlaylist(playlist,artistname,songTitle){
  playlist[artistname]=songTitle
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  
  
  
}