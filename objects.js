var playlist = { artistName: "songTitle" };

function updatePlaylist(playlist, artistName, songTitle) {
  var wholePlaylist = playlist[artistName] = songTitle;
  return wholePlaylist;
}

function removeFromPlaylist(playlist, artistName) {
  var updatedPlaylist = delete playlist[artistName];
  return updatedPlaylist;
}