var playlist = {"The Beatles": "Come Together", "Led Zeppelin": "Black Dog", "Rolling Stones": "Satisfaction"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}