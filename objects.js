var playlist = {
  U2: "beautiful day",
  velvet: "perfect day",
};

function updatePlaylist(obj,key,value){
  return Object.assign({}, obj, { [key]: value })
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
  return playlist
}
