var playlist = {smashmouth: 'Allstar'}

var updatePlaylist = function(playlist, artist, songTitle) {
  playlist[artist] = songTitle
  return playlist
}

var removeFromPlaylist = function(playlist, artist) {
  delete playlist[artist]
  return playlist
}
