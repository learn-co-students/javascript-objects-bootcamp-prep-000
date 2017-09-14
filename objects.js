var playlist = { Linkin: "Gold"}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}

//removeFromPlaylist({ Kanye: "Gold Digger" }, "Kanye")
