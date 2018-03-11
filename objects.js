var playlist = {
  'artist1':'song1',
  'artist2':'song2'
};

function updatePlaylist(playlist,artist,song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist,artist) {
  delete playlist[artist];
  return playlist;
}