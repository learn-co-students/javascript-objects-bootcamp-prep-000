var playlist = {
  'JayZ': '99 Problems',
  'J Balvin': 'Ay vamos'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  
  return playlist;
}