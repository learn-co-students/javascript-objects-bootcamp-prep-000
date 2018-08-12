var playlist = {'Phil Ochs': "Pendulum"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist['Slowdive'];
}