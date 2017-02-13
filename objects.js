var playlist = {
  romeo: 'Eres Mia',
  eminem: '97 Bonnie & Clyde'
};

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, { [artist]: song});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
