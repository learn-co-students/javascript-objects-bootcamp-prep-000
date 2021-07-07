var playlist = new Object();

var updatePlaylist = function(playlist, artist, song){
  playlist[artist] = song;
  return playlist;
}

var removeFromPlaylist = function(playlist,artist){
  delete playlist.artist;
  return playlist;
}
