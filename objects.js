var playlist = {}

function updatePlaylist(playlist, artist, song) {
  return playlist.[artist] = song;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artist;
  return playlist;
}
