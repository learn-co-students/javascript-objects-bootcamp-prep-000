var playlist = {'Queens of The Stone Age': 'The Evil Has Landed'}

function updatePlaylist(obj, artistName, songTitle) {
  return Object.assign({}, obj, {[artistName]: songTitle})
}

function removeFromPlaylist(obj, artistName) {
  delete obj.artistName
  return Object.assign({})
}