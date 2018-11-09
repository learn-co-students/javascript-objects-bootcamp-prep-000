var playlist = { artistOne: "song one", artistTwo: "song two"};

function updatePlaylist(playlist, artist, song){
  playlist[artist] = "song";
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
