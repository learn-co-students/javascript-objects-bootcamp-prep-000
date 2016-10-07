var playlist = {
  "LCD Soundsystem": "Sound of Silver",
  "Interpol": "Turn On The Bright Lights",
  "Nas": "Illmatic"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
