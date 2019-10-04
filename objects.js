var playlist = { Chainsmokers: 'Call You Mine' };

function updatePlaylist (playlist, artistName, songTitle) {
  
  Object.assign (playlist, { [artistName]: songTitle});
  
  return playlist;
}


function removeFromPlaylist (playlist, artistName, songTitle) {
  delete playlist[artistName];
  return playlist;
  
}