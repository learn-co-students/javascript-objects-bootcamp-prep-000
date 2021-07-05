var playlist = {}

function updatePlaylist(object, artistName, songTitle) {
  object[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(object, artistName) {
  delete object[artistName];
  return playlist;
}
