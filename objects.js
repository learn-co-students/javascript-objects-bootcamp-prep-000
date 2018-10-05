let playlist = {
  hyuna: 'bebe',
  pentagon: 'shine',
  exo: 'kokobop'
}


function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}
