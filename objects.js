var playlist = { artist1: "song1" };
function updatePlaylist(playlist, artist, song) {
  playlist.artist2 = "song2"
  return playlist
}
function removeFromPlaylist(playlist, artist2) {
  delete playlist[artist2]
  return playlist


}
