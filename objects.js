var playlist = {artist1: "song1"};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = "song";
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}