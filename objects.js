var playlist = {
  Beyonce : "All the ladies",
  Rihanna: "Please don't stop the music"
};

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
