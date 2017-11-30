var playlist = {}

function updatePlaylist(obj,key,value){
  return Object.assign({}, obj, {[key]:value})
}

function removeFromPlaylist(obj,key,value){
  return delete playlist.key
}
