var playlist = {
  artistName: "songTitle"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, songTitle) {
  delete playlist[songTitle];
  return playlist;
}
