var playlist = {UB40: "Red Red Wine"};

function updatePlaylist(playlist, artistName, songTitle){
  delete playlist.UB40;
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
