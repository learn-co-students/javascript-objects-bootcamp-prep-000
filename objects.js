var playlist = new Object({ Devo: 'Whip It'});

function updatePlaylist(obj, artistName, songTitle) {
  return Object.assign({}, obj, {[artistName] : songTitle})
}
function removeFromPlaylist(obj, artistName) {
  var playlist = Object.assign({}, obj)
  delete playlist[[artistName]]
  return playlist
}