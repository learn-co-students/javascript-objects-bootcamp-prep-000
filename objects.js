var playlist = {name: "songTitle"};

function updatePlaylist (obj, key, value) {
  return Object.assign({}, obj, {[key]: value })
}

function removeFromPlaylist (playlist, name) {
  delete playlist[name];
  return playlist;
}
