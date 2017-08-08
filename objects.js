var playlist = { artistName : "songTitle" };

function updatePlaylist(obj, key, value) {
  Object.assign({} , { [key]: 'value'})
  return Object.assign({}, { [key]: value});
}

function removeFromPlaylist(obj, key) {
  delete playlist.key;
  return {};
}
