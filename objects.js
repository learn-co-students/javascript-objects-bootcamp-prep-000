var playlist = {'Pink Floyd' : 'Wish You Were Here'};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
