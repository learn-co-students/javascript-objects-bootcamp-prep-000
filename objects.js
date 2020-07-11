var playlist = new Object({infamous: "letitgo"})

function updatePlaylist(object, key, value) {
  object[key] = value
  return object
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
