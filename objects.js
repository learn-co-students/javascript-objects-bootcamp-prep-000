var playlist = {
  'Johnny Cash': "Burning Ring of Fire"
}

function updatePlaylist(obj, artistName, songTitle) {
  return Object.assign({}, obj, { [artistName] : songTitle});
}

function removeFromPlaylist(obj, artistName) {
  delete obj[artistName];
  return obj;
}