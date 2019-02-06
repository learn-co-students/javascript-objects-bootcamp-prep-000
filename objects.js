var playlist = { "Ludwig van Beethoven": "Symphony No. 9" };

function updatePlaylist(pl, artistName, songTitle) {
  pl[artistName] = songTitle;
}

function removeFromPlaylist(pl, artistName) {
  pl.delete(artistName);
}
