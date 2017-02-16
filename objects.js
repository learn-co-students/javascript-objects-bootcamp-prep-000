var playlist = {artist:"song"};

function updatePlaylist(playlist, artistName, songTitle){
  playlist = Object.assign({[artistName]: songTitle});
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  eval("delete playlist."+artistName);
  return playlist;
}
