var playlist = {artistName: `songTitle`};

function updatePlaylist (playlist, key, value) {
return Object.assign({}, playlist, {[key]: value})
}

function removeFromPlaylist (playlist, artistName) {
  var playlist = {artistName: `songTitle`};
  delete playlist.artistName
  return playlist;
}
