
var playlist = {
  Madonna: "Holiday"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistname) {
  delete playlist[artistname]
  return playlist
}