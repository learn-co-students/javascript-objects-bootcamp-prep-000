var playlist = {tupac: "Dear Momma", childishGambino: "This is America"};

function updatePlaylist(playlist, artistName, song) {
  playlist[artistName] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
}