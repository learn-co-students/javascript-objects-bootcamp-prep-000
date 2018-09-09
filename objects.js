var playlist = {
  chrisBrown: 'Loyal',
  rihanna: 'Work'
};

function updatePlaylist (obj, artistName, songTitle) {
  obj[artistName] = songTitle;
  return obj;
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}