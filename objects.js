var playlist = {
  Metallica: 'One', 
  Slayer: 'Raining Blood',
  Slowdive: 'Alison',
};

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}