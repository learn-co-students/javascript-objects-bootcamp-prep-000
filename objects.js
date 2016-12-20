//var playlist = {"artistName", "songTitle"};
var playlist = Object.assign({artistName: "songTitle"});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist = Object.assign({}, playlist, {[artistName]: songTitle});
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}