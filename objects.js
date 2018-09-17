var playlist = {name : "song"};

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist) {
  //have to use brackets because artist is a variable
  delete playlist[artist];
  return playlist;
}