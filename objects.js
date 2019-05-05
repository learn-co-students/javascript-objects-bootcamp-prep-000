var playlist = { coldplay: 'sky full of stars'}
function updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
