var playlist = {
  RollingStones: "Angie",
  KatyParry: "Rise",
  LedZeppelin: "Going to California"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
