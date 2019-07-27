var playlist = {
  BTS: "Boy with Luv(feat.Halsey)",
  Lizzo: "Truth Hurts"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.songTitle
  return playlist
}
