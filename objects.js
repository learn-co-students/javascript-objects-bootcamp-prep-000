var playlist = {
  Beyonce: "All The Single Ladies"
};


function updatePlaylist(playlist, artistName, songTitle) {
  var updatedPlaylist = Object.assign({}, playlist, {[artistName]: songTitle})
  return updatedPlaylist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
