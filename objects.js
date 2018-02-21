var playlist = {artistName:"song"};

function updatePlaylist(playlist, song, artistName) {
  playlist[song] = artistName;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}