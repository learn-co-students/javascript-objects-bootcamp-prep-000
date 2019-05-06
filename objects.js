let playlist = {
  "Bod Dylan": "Like a Rolling Stone"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  return delete playlist[artistName];
}