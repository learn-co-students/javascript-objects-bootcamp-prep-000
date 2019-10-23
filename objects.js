var playlist={rock:'U2', artistName:'songTitle'};

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}
updatePlaylist(playlist, 'artistName', 'songTitle');

function removeFromPlaylist(obj,key) {
   obj=delete obj.key

  return Object.assign({},obj)
}
