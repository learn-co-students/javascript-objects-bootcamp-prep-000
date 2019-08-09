function createPlaylist(artistName, songTitle) {
  var obj = {[artistName]: songTitle};
  return obj;
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

var playlist = {key: 'value'};

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
