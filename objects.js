var playlist = new Object();
playlist.Drake = "Best I've ever had"

function updatePlaylist(playlist, name, songTitle) {
  return Object.assign({}, playlist, {name:songTitle})
}

function removeFromPlaylist(playlist, name) {
   delete playlist.name;
   return playlist;
}