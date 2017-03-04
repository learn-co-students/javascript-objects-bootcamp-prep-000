var playlist = {artistName: 'songTitle'}

function updatePlaylist (object, key, value){
  return Object.assign({}, object, {[key]: value})
}

function removeFromPlaylist(object, key){
  const newObj = Object.assign({}, object)
  delete newObj[key]
  return newObj
}
