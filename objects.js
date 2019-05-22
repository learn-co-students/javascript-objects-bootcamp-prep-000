var playlist = new Object({keys: "0"});

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign( {}, { [artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}