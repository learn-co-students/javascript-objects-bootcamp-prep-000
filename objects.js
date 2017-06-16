function updateObjectWithKeyAndValue(obj, key, value) {

  return Object.assign({}, obj, { [key]: value })
}
const recipe = { eggs: 3 }

updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')
console.log(recipe)

var playlist = {'artistName' : 'songTitle'}

function updatePlaylist(playlist,key,value) {
  playlist[key]= value
  return playlist
}

function removeFromPlaylist(playlist,key,value) {
  delete playlist[key]
  return playlist
}
