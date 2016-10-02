// Playing with dictionaries, in JS: Objects.

var playlist = new Object({"The Default": "The Default Song"});

var updatePlaylist = function (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

var removeFromPlaylist = function (playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
