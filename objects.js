var playlist = {
  Queen: "Bohemian Rhapsody"
}

function updatePlaylist(playlist, artist, song) {
  Object.assign(playlist, { [artist]: song })
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
