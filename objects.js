var playlist={artistName: 'songTitle'};
function updatePlaylist(obj, key, value){
  obj[key]=value
  return obj
}

function removeFromPlaylist(Object, artistName){
    delete playlist[artistName];
  
}