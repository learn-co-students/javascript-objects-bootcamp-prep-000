const playlist = {
  'Prince': 'I would die for you'
}

function updatePlaylist(playlist, artist, track) {
  return playlist[artist] = track
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
