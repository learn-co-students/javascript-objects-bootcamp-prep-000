var playlist = {Kanye: "Gold Digger"}

function updatePlaylist(playlist, artist, songTitle) {
  return Object.assign({}, playlist, {[artist]:songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
