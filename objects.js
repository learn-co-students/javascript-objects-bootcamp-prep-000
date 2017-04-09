var playlist = {
  "A-ha": "Take on me",
  "ABBA": "Dancing queen",
  "Bryan Adams": "Straight from the heart",
  "Aerosmith": "Dream on"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}