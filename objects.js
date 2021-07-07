var playlist={
  artist:"song"
}

function updatePlaylist(obj,key,value){
  var newObj= Object.assign({}, obj, { [key]: value })
  return newObj
}
function removeFromPlaylist(obj,key){
  delete obj[key]
  return obj
}
