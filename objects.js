var playlist = {"The Who": ["Baba O'Reilly", "Who Are You?"]};

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;

  return playlist
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];

  return playlist;
}
