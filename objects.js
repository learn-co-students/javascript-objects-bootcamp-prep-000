var playlist = {'Beatles' : 'All You Need Is Love', 'Aerosmith' : 'Welcome to the Jungle'};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}