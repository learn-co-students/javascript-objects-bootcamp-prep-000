var playlist = {beatles: "Blackbird", hendrix: "Little Wing"};

function updatePlaylist(obj, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(obj, artist) {
  delete playlist[artist];
  return playlist;
}
