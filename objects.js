
var playlist = new Object({"Bob Dylan": "Like a Rolling Stone"});

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle; 
  return playlist;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}