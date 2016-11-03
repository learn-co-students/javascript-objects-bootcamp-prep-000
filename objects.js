var playlist = { Bowie: "Fashion", Morrissey: "Every Day is like Sunday", Mats: "Hospital"}

function updatePlaylist(playlist, artistName, songTitle) {
return Object.assign({}, playlist, {[artistName]: songTitle})
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
