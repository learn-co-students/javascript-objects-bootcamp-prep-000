var playlist = Object.assign({Beatles: "Hey Jude"}, {Television: "Days"})

var updatePlaylist = function(playlist, artist, songTitle) {
  return Object.assign(playlist, {[artist]: songTitle})
}

var removeFromPlaylist = function(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}