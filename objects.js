var playlist = new Object({mew: "mewing"});

var  updatePlaylist= function(playlist, artistName, songTitle){
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

var removeFromPlaylist = function(playlist, artistName, songTitle){
  delete playlist[artistName];
  return playlist;

}
