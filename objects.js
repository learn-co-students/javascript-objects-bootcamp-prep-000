var playlist = {["Real Estate"]: "darling", ["Mark Eitzel"]: "The last Ten Years"}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}