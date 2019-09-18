var playlist = {}
playlist['Shakira'] = 'Hips don/`t lie'
function updatePlaylist(obj, artist, song) {
  return Object.assign({}, obj, { [artist]: song})
}

function removeFromPlaylist(obj, artist) {
 delete obj[artist]
 return obj
}