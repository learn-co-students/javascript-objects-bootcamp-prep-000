var playlist={Beatles:"Let it be",};
function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName]=songTitle;
  return playlist;
  
}
function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName];
   playlist;
}