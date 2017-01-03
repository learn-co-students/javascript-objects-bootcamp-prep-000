var playlist = new Object ({artist: "songTitle"});

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

function removeFromPlaylist (object, key){
  delete object[key];
  return object;
}
