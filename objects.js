var playlist = {
  TLC : "No Scrubs",
  NSYNC : "Bye Bye Bye",
  Seether : "Broken",
}

function updatePlaylist (playlist, artistName, songTitle) {

  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}