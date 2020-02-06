let playlist = {'Jay Chou': 'Love Confession'};

//updatePlaylist
function updatePlaylist(playlist, artist, song){
  playlist[artist] = song;
  return playlist;
}

//removeFromPlaylist
function removeFromPlaylist(playlist, artist){
  delete playlist[artist];
  return playlist;
}

