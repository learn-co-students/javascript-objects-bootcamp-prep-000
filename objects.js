var playlist = { ABBA: "SOS", theClash: "London Calling" }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
  return playlist
}

