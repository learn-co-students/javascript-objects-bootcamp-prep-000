var playlist = { 'Will Smith' : 'Big Willie Style', 'The Killers' : 'Mr. Brightside' };

function updatePlaylist(obj, artistName, song) {
  obj[artistName] = song;
  return obj;
}

function removeFromPlaylist(obj, artistName) {
  delete obj[artistName];
  return obj;
}

