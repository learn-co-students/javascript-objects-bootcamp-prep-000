var playlist = {
  artistName: "songTitle"
}

function updatePlaylist(Object, key, value) {
  Object[key] = value
  return Object
}

function removeFromPlaylist(Object, key) {
  delete Object[key]
  return Object
}
