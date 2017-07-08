var playlist = new Object({tswift: "bad blood", imenzel: "let it go", disney: "hakuna matata"});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
};

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
};
