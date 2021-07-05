var playlist = {
  "Kanye": 'Gold Digger',
  "Beyonce": 'Lemonade'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
};

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Kanye;
  return playlist;
};
