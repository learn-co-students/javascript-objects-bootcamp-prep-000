const playlist = { 'artist': 'song'};

const updatePlaylist = (playlist, artistName, songTitle) => {
  playlist[artistName] = songTitle;
}

const removeFromPlaylist = (playlist, artistName, songTitle) => {
  delete playlist[artistName];
}
