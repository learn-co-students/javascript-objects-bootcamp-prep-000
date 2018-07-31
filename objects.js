var playlist = {Beyonce: "Love on Top"}

function updatePlaylist(playlist, artist, songTitle) {
  playlist[artist] = songTitle
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
