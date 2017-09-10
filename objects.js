var playlist = { artist: "song" }

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist

}

function removeFromPlaylist(artist, song) {
  delete playlist.artist
  return playlist

}
