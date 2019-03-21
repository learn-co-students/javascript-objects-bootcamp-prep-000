let playlist = {Yes: "Owner of a Lonely Heart"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
}
