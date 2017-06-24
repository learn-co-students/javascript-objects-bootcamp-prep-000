var playlist = {
  Asgeir: "On That Day"
}

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, {[artist]: song})
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist
}
