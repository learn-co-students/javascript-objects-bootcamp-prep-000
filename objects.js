var playlist = {};
playlist = {artistName:"songTitle"};
var updatePlaylist = function(playlist,artistName, songTitle){
  return Object.assign({},{[artistName]:songTitle})
}
var removeFromPlaylist = function(playlist, artistName){
  delete playlist[artistName];
  return playlist
}
