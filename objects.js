var playlist = new Object();
playlist["Snoop Dog"] = "Trees";

function updatePlaylist(playlist, artistName, songName) {
  playlist[artistName] = songName;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}
