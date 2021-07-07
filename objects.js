var playlist = {
  "Rammstein" : "Sehnsucht",
  "The Beatles": "Strawberry Fields",
  "Boards of Canada": "Daryvan Cowboy"
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist (playlist, artist) {
  delete playlist[artist];
  return playlist;
}
