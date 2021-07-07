var playlist = {
  "Django": "Nuages",
  "Kid Rock": "bawitdaba",
  "Pavement": "Stereo"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}