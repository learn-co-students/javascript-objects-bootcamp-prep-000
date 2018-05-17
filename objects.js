var playlist = {
  Ella: 'A-Tisket, A-Tasket',
}  

function updatePlaylist(playlist, artist, song) {
  return playlist[artist] = song
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}