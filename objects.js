var playlist = { "Strokes": "Reptilia", "Beck": "Wow", "Sugar Hill Gang": "Rapper's Delight"}

function updatePlaylist(playlist, artistName, songTitle) {
 playlist[artistName] = songTitle
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return removeFromPlaylist
}