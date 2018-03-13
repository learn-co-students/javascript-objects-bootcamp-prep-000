var playlist = new Object({artistName:'songTitle'});

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({playlist},{artistName:songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
}
