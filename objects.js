var playlist = {
  "Broken Social Scene": "Swimmers",
  Stars: "Set Yourself on Fire"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}
