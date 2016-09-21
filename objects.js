var playlist = {
  alicia: "Common",
  mariah: "Hero",
  beyonce: "Sorry"
}

var updatePlaylist = function(obj, artist, song) {
  obj[artist] = song;
  return obj;
}

var removeFromPlaylist = function(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
