var playlist = {Adele: "Hello"};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({},playlist, { [artistName] : songTitle});
}

function removeFromPlaylist(playlist, artistName){
  //var newObj = Object.assign({}, playlist);
  delete playlist[artistName];
  return playlist;
}
