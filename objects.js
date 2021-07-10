var playlist ={
  Radiohead: 'OK Computer',
  'Nine Inch Nails': 'Closer'
}
function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}
function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
