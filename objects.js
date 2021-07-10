var playlist = { "Drake": "started from the bottom" };

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, {[artist]: song});
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}
