var playlist = {
  Prince: "Purple Rain",
  Elvis: "Blue Suede Shoes",
  Aretha: "Respect"
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return  playlist
}
