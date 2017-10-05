var playlist = {artist: 'songs title'}

function updatePlaylist(obj, key, value){
  return Object.assign({}, obj, { [key]: value })
}

function removeFromPlaylist({key: "value"}, key){
  delete {key: "value"}.key
}
