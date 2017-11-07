var playlist = {
  Metallica: "Enter Sandman",
  ACDC: "Back in Black",
  Queens: "Bohemian Rhapsody"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
};

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
};
