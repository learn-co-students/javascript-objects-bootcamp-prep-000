var playlist = {
  'Taylor Swift': '29',
  radiohead: 'Karma Police'
};

function updatePlaylist(playlist, artistName, SongTitle) {
  return Object.assign(playlist, {[artistName]: SongTitle});
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}