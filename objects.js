var playlist = {artistName: "songTitle"}

function updatePlaylist(playlist,artistName,songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
  return updatePlaylist
}

function removeFromPlaylist (playlist,artistName) {
  delete playlist.artistName
  return removeFromPlaylist
}
