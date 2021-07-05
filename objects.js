var playlist = new Object({MattMaher: 'Lord I Need You'})

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}