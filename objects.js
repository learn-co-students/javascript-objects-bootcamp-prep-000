var playlist = {}
playlist.Bruce = "Born to run"

function updatePlaylist(playlist, artistName, songTitle) {
   Object.assign(playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}