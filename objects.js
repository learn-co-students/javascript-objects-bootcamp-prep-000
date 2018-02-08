var playlist = new Object({
  artistName: "Kanye",
  songTitle: "Gold Digger"
});

function updatePlaylist (playlist, artistName, songTitle) {
  return Object.assign({},
  playlist, { [artistName]: songTitle})
}

updatePlaylist

playlist

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName];
  return playlist;
}

