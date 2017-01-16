var playlist = new Object({
  anberlin: 'never take friendship personal',
  mae: 'the everglow',
  emery: 'fractions'
});

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
