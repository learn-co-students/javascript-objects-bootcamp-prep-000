var playlist = { soundgarden: 'rusty cage' };

function updatePlaylist(obj, artist, song) {
  return Object.assign({}, obj, { [artist]: song });
}

function removeFromPlaylist(obj, artistName) {
  delete obj[artistName];
  return obj
}
