var playlist = { 'Taylor Swift': 'Blank Space'}

function updatePlaylist(playlist, artistName, song) {
  playlist[artistName] = song
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}