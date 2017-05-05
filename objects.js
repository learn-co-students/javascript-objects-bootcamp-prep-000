var playlist = {artistName: 'songTitle'};
function updatePlaylist (playlist, artistName, songTitle) {
  return Object.assign({}, playlist,{[artistName]: songTitle} )
}

var removeFromPlaylist = function (playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}


