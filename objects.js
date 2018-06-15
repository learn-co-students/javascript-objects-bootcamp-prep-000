var playlist = {
  artistName: "Hips Don't Lie",
  halsey: "Bad at Love"
}

function updatePlaylist (playlist, artist, song) {
  playlist[artist] = song;
  
  return playlist;
  
}

function removeFromPlaylist (playlist, artistName) {
  
  delete playlist[artistName];

  return playlist;
}


