var playlist = { fooFigthers:"Wheels" };
function updatePlaylist(object,artistName,songTitle){
  Object.assign(playlist,object,{[artistName]:songTitle})
  
  return object
}
function removeFromPlaylist(object,artistName){
  
  delete object[artistName];
  return object;
}

