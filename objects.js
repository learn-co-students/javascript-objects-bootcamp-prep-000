var playlist = {
  Adele : "Make You Feel My Love",
}

// adds the `artistName: songTitle` key-value pair to `playlist`
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

// removes `artistName` from `playlist`
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
