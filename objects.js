var playlist = {"bob": "music"};

var updatePlaylist = (playlist, artistName, song) => {
  playlist[artistName] = song;

  return playlist
}

var removeFromPlaylist = (playlist, artistName) => {
  delete playlist[artistName];
  return playlist;
}
