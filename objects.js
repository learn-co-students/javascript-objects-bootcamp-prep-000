var playlist={Queen:"We are the champions",
Enya:"Amarantine",
 SodaStereo:"Cancion Animal"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName]=songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}