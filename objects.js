var playlist = {
  'Phil Ochs': "Here's to the State of Mississippi",
  Kanye: "Gold Digger"
};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
};

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
};
