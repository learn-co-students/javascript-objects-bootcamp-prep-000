var playlist = {
  "G-Eazy": "I Mean It",
  "Stealth": "Judgment Day",
  "Broods": "Bridges"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
