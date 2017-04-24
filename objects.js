var playlist = {
  radiohead: 'Paranoid Android',
  grizzlyBear: 'Two Weeks',
  ratatat: 'Mirando'
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Kanye;
  return playlist;
}

