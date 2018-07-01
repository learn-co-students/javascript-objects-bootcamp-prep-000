var playlist = {artist:"song"}

function updatePlaylist(playlist, artist, songTitle) {
  return playlist[artist]=songTitle
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist
}
