var playlist = {
  nipseyHussle: 'Check it out',
  mariahCarey: 'Fantasy',
  anthonyHamilton: 'Charlene',
  };
  
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}



