var playlist = {artistName: 'songTitle'};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = 'songTitle';
  return updatePlaylist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return removeFromPlaylist;
}
