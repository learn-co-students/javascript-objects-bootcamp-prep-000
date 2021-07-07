var playlist = {names: "song"
};

function updatePlaylist(obj, key, value){
  obj[key] = value;
  
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
 return playlist;
}