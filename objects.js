var playlist = {
  BTS: "Boy with Luv(feat.Halsey)",
  Lizzo: "Truth Hurts",
  Led_Zeppelin : "Stairway to Heaven"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
};
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
};
