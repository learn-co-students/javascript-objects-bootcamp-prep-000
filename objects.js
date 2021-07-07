var playlist = {
    "Bruno Mars": "versace on the floor",
    "Eagles": "Love will keep us alive"
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}
