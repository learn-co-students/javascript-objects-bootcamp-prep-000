var playlist = {Usher: "Burn"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({[artistName]: songTitle}, playlist)
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  // var playlist = {playlist, artistName}
  delete playlist[artistName];
  return playlist;
}
