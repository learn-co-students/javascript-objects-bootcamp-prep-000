var playlist = {artistName: "title"};

function updatePlaylist(playlist, artistName, title) {
  return Object.assign(playlist, { [artistName]: title});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}