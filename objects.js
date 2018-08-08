var playlist = { Eminem: 'Rap God' };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {

  delete playlist['Slowdive'];
  
  return playlist;
}