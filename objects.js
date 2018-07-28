var playlist = {MichaelJackson: "Man in the mirror"};
function updatePlaylist (playlist, artist, song) {
  playlist [artist] = song;
  return playlist;
}
function removeFromPlaylist (playlist, artist) {
  delete playlist[artist];
  return playlist;
}
