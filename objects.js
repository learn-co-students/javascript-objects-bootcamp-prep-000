var playlist = {
  Cindy: 'Girls just want to have fun',
  Regina: 'Fidelity'
}

function updatePlaylist(playlist, artistName, songTitle){
  console.log(artistName, songTitle);
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
