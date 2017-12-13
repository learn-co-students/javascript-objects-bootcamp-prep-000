var playlist = {eminem: '8 mile'};

function updatePlaylist(obj, artistName, songTitle){
  return Object.assign({}, obj, {[artistName]: songTitle});
}

function removeFromPlaylist(obj, artistName){
  delete obj[artistName];
  
  return obj;
}