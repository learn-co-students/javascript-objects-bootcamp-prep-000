var playlist = { Usher: 'Burn' }
 //no artists with numbers.
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist , artistName){
  delete playlist[artistName];
  return playlist;
}