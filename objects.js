var playlist = new Object ({artistName: 'songTitle'});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = ['Slowdive', 'My Bloody Valentine'];
  return Object;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return Object;
}