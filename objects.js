var playlist = {
  Cindy: 'Girls just want to have fun',
  Regina: 'Fidelity',
  Kanye: 'Gold Digger'
}

function updatePlaylist(playlist, artistName, songTitle){
  console.log(artistName, songTitle);
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName){
  var newObj = Object.assign({}, playlist);
  delete newObj[artistName];
  return newObj;
}
