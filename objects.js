var playlist = {
  Artist1: "Artist1 Song",
  Artist2: "Artist2 Song",
  Artist3: "Artist3 Song"
};

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function removeFromPlaylist(obj, key) {
  delete obj[key]
  return obj
}
