var playlist = {
  Pitbull: 'Dale'
}

playlist.Zayn = "Awake"

function updatePlaylist (playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist (playlist, artist) {
  delete playlist[artist];
  return playlist
}
