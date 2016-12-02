var playlist = {
  key: "name"
}

var updatePlaylist = function (playlist, artistName, songName) {
  playlist[artistName] = songName;
return playlist;
}

var removeFromPlaylist = function(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
