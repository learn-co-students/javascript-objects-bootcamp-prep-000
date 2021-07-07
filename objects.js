var playlist = {
  "Maroon 5": "She Will Be Loved"
};

function updatePlaylist (playlist, artist, song) {
  playlist[artist] = song;

  return playlist;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];

  return playlist;
}
