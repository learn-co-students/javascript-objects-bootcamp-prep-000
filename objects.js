var playlist = { Crankdat: 'Dollars' }
function updatePlaylist(playlist, artist, song) {
  return playlist[artist] = song
}
function removeFromPlaylist(playlist, artist) {
  return delete playlist.artist
}
