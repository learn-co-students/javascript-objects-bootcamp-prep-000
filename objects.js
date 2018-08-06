var playlist = {
  "Phil Ochs": "Slowdive",
  "Prince": "Purple Rain",
  
};

function updatePlaylist (playlist,artistName,songTitle) {
  playlist[artistName]=songTitle;
  return playlist;
}

function removeFromPlaylist (playlist,artistName) {
  delete playlist[artistName];
  return playlist;
}


console.log(removeFromPlaylist(playlist,"Prince"));