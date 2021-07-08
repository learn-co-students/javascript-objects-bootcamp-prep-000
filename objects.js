var playlist = new Object({ACDC: "Back in Black"})

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, aName) {
  delete playlist[aName]
  return playlist
}