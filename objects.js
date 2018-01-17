var playlist = {tiesto: "red lights"}

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

function removeFromPlaylist(obj, key) {
  delete obj[key];
  return obj;
}
