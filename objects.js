var playlist = new Object();
playlist["usher"] = "My Way";
playlist["selena gomez"] = "Same Old Love";
playlist["shakira"] = "Chantaje"


updatePlaylist = function (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist
};

removeFromPlaylist = function(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}
