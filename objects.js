var playlist = { Kendrick: "Humble"};

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}

function removeFromPlaylist(obj, artist) {
  return delete obj.artist
}
