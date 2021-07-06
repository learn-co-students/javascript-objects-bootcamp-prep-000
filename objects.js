var playlist = new Object({Adele: "Someone Like You"});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = 'songTitle';
  
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}