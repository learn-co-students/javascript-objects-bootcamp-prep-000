var playlist = {
  HAIM:'Falling'
};

function updatePlaylist(playlist,key,value){
  playlist[key]=value;
  return playlist;
}

function removeFromPlaylist(playlist,artistName){
  delete playlist.Kanye;
  return playlist;
}
