var playlist = {
  Lauv: 'Invisible Things'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive
  return playlist
}