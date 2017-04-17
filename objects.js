var playlist = {
  K2NE1: "Hello Bitches"
};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
