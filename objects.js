var playlist = { "Bob Dylan" : "Forever Young" };

function updatePlaylist(playList, artistName, songTitle) {
  playlist = playList
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playList, artistName) {
  playlist = playList
  delete playlist[artistName]
  return playlist;
}
