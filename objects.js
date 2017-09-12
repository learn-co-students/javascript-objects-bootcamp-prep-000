var playlist = new Object();

playlist = {
  Mozart: "Pelestrina"
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
