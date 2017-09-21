var playlist = {
  Beyonce: "Crazy in Love",
  Prince: "Purple Rain"
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
