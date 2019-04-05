let playlist = { Hendrix: "Purple Haze"}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive
  return playlist
}
