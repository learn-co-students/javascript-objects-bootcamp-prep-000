var playlist = {
  "Eminem" : 'Stan',
  "Dr Dre" : 'Still D.R.E'
}

function updatePlaylist(playlist, artistName, songTitle){
  
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}