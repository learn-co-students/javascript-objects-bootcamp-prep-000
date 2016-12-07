var playlist = {
  'The Chainsmokers': 'Closer',
  'twenty one pilots': 'Heathens',
  'Sia': 'Cheap Thrills'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
  }
