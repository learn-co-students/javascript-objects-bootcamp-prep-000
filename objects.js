var playlist = {artistName: "songTitle"}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle})
}

function removeFromPlaylist(artistName, songTitle) {
  delete playlist.artistName

  return playlist
}
