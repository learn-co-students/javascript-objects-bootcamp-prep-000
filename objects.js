var playlist = {"The Beatles": "Let It Be"};

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}

function removeFromPlaylist(obj, artistName) {
  delete obj[artistName]
  return {}
}
