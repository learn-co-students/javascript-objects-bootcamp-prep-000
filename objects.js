var playlist = {
  shinedown: "second chance"
}

function updatePlaylist (playlist, artist, title) {
  playlist[artist] = title;
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
