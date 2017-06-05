var playlist = {
  Kanye: "Gold Digger"
};

function updatePlaylist(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName){
  var newPlaylist = playlist;
  delete newPlaylist[artistName];
  return newPlaylist;
}
