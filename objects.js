var playlist = {
  Beyonce: "Rocket",
  Smino: "Netflix & Dusse",
  BrysonTiller: "Don't",
}
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign ({}, playlist, { [artistName]: songTitle })
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
