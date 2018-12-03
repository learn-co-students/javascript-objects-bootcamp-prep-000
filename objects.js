var playlist = {'Bruno': 'Finesse'};

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(obj, artistName) {
  delete obj[artistName];
  return obj;
}