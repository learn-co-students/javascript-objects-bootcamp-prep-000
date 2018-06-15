var playlist = {Adele: "Hello"};

function updatePlaylist(playlist, Artist, Song) {
  playlist[Artist] = Song;
  return playlist;
}

function removeFromPlaylist(playlist, Artist) {
  delete playlist[Artist];
  return playlist;
}
