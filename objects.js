var playlist = {snoop: "what's my name"};

function updatePlaylist(obj,key,value){
  obj[key] = value
  
  return obj
}

function removeFromPlaylist(playlist, artistName){
  
  delete playlist[artistName];
  
  playlist;
  
}