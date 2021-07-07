var playlist = {
  "Michael Jackson": "Human Nature",
  "Kendrick Lamar": "Sing About Me",
  "Aaliyah":"We Need A Resolution",
}


function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}