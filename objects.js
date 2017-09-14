var playlist = { "Jack White": "Blunderbuss",
"Red Hot Chili Peppers": "Soul to Squeeze" }

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]

  return playlist
}
