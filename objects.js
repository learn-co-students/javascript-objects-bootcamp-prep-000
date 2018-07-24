var playlist = {Warren_Barfield: "Come Alive"};

function updatePlaylist(playlist, artist, song){
  playlist.artist = song;
  return playlist;
}

function removeFromPlaylist(playlist, artist){
  delete playlist.artist;
  return playlist;
}