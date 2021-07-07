var playlist = { artistName: "songTitle" };

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, { [key]: value})
}

function removeFromPlaylist(obj, key) {
  delete playlist.artistName;
  return playlist;
}
