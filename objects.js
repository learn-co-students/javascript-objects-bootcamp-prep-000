var playlist = {"adele": "fire to the rain", "brandi carlile": "keep your heart young" }

function updatePlaylist (playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist (playlist, artist ) {
  delete playlist[artist];
  return playlist;
}