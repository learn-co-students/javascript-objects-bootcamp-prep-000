var playlist = {
  artistName: 'Mya',
  songTitle: 'Fallen'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = 'Pitbull';
  
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  
  return playlist;
}