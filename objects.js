var playlist = {artistName: "songTitle"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = "songTitle";
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}
