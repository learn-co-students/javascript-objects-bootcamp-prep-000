var playlist = { FalloutBoy: "The Phoenix" };

function updatePlaylist(playlist, artistName, songName) {
  playlist[artistName] = songName;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  playlist;
}