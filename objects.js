var playlist = {Gomez: "It ain't me"}

function updatePlaylist(playlist, artistName, songTitle) {
  return object.assign({}, playlist, {artistName: [songTitle]})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
