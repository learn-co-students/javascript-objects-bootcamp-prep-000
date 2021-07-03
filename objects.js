var playlist = {
  maroon5: "Animal",
  zacBrownBand: "Chicken Fried",
  keane: "Everybody's Changes"
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
