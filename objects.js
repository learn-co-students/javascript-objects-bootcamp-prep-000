var playlist = {
  ginuwine: "pony",
  jayz: "anything",
}

var updatePlaylist = function(playlist,artistName,songTitle){
  return Object.assign({},playlist,{[artistName]: songTitle});
  return playList;
}

var removeFromPlaylist = function(playlist,artistName){
  delete playlist[artistName];
  return playlist;
}
