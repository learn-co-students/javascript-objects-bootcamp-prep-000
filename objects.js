var playlist = {
  Maroon5: "Moves Like Jagger",
  MariahCarey: "Hero"
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}
