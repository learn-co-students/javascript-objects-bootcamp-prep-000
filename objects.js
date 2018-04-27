var playlist = {
  bossfight : "pirate manners",
  lukHash : "falling apart",
  instantRemedy : "lotus turbo chalenge 2"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
};

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
  return playlist;
};
