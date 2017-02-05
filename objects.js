var playlist = {singer: 'song'};

var updatePlaylist = function(playlist, artist, song) {
  playlist[artist] = song;
  return playlist;
}

var removeFromPlaylist = function(playlist, artist, song) {
  delete playlist[artist];
  return playlist;
}