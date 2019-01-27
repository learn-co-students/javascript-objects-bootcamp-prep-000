var playlist= {Jewel:'Hands'};
function updatePlaylist(playlist,artistname, songtitle){
  playlist[artistname]=songtitle;
  return playlist;
}
function removeFromPlaylist(playlist,artist){
  delete playlist[artist];
  return playlist;
 
}