var playlist = { "Ludwig van Beethoven": "Symphony No. 9" };

function updatePlaylist(pl, artistName, songTitle) {
  pl[artistName] = songTitle;
  return pl;
}

function removeFromPlaylist(pl, artistName) {
  delete pl[artistName];
  return pl;
}
