var playlist = {
  artist: "song title"
}

function updatePlaylist (playlist, artistName, songTitle) {
  //add artist and song to playlist and return playlist
  playlist = Object.assign({}, playlist, {[artistName]: songTitle})
  return playlist
}

function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName]
  return playlist
}