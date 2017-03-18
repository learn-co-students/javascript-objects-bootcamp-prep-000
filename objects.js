var playlist = {
  "Billy Joel": "Piano Man",
  "Imagine Dragons": "Radioactive"}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
/*
function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]

  return playlist
}*/
