var playlist = {
  SherylCrow: "All I wanna Do",
  ACDC: "Back In Black"
};

//limitations on playlist: using playlist{} we can only look up song names (values) by artist (keys)

function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName];
  return playlist;
}

