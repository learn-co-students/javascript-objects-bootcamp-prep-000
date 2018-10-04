var playlist = {
  americanFootball: 'Never Meant',
  williamBonney: 'See Ya Later',
  tigersJaw: 'Between Your Band and the Other Band'
};

function updatePlaylist(playlist, artistName, songTitle) {
  return playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}
