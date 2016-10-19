var playlist = {
  GD: "Row Jimmy",
  PMG: "5-5-7",
  Phish: "Dogs Stole Things"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
