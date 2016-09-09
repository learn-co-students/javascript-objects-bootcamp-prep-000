var playlist = {
  "Velvet Underground": "Sweet Jane",
  "Rolling Stones": "Angie"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
