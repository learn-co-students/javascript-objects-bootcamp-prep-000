//var playlist = new Object();

var playlist = {
  artistName:'abc',
  songTitle:'123'
}

function updatePlaylist(playlist,artistName,songTitle) {
return Object.assign({},playlist,{[artistName]:songTitle})
//return playlist;
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName];
  return playlist;
}
