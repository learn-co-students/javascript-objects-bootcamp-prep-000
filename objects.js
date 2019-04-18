let playlist = {
  'Rolling Stones': 'Sympathy for the Devil'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  return delete playlist[artistName];
}

