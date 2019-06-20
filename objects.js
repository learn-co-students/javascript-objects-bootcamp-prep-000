var playlist = {artist:"songs"};

var updatePlaylist = function (obj, artist, song) {
  obj[artist] = song;
  return obj;
}

var removeFromPlaylist = function(playlist,artist) {
  delete playlist[artist];
  return playlist;
}