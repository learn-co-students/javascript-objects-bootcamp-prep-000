var playlist = {
  "N.W.A.": "Straigh out of Compton"
};

function updatePlaylist(obj, artist, song) {
  return Object.assign({}, obj, {[artist] : song})
}

function removeFromPlaylist(obj, artistName) {
  delete obj[artistName];
  return obj;
}
