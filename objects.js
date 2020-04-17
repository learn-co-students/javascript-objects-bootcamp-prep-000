var playlist = {'Phil Ochs': 'Beautiful Day'};

function updatePlaylist(playlist, artistName, songTitle) {
  delete playlist.U2;
  return Object.assign({}, playlist, { artistName: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  delete playlist.Slowdive;
}
