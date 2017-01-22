var playlist = {artistName: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle) {
  // return Object.assign({}, playlist, { [artistName]: songTitle });
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]; // Since artistName is a variable use brackets.
  return playlist;
}
