let playlist = {PaulSimon:"Boy in the Bubble"}
function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
}
function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}