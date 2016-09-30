var playlist = { artist: 'song'};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  var playlist = {};
  delete playlist.artistName;
  return playlist
}
