var playlist = {artistName: "songTitle"}

funtion updatePlaylist(playlist, artistName, songTitle) {
  object.assign({}, artistName, songTitle)
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
}