var playlist = {
  nineInchNails: "Head Like a Hole"
}

function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
