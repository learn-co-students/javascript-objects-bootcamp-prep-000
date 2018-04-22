var playlist={shamak:"mohabbat kar le kar le"};

function updatePlaylist(playlist,name,value){
  return Object.assign(playlist,{[name]:value})
}
function removeFromPlaylist(playlist,name){
  delete playlist[name];
  return playlist;
}