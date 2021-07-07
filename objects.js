var playlist = new Object({artistName:'song'});

function updatePlaylist (playlist, artistName, song) {

  return Object.assign({}, playlist, {[artistName]:song})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
