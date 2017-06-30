var playlist = {
  Cole: "Neighbors",
  Trey Songs: "Know My Name",
  Fall Out Boy: "Dance Dance"
}

function updatePlaylist (obj, key, value) {
  return playlist.assign({}, obj, {[key]: value})
}

funtion removeFromPlaylist (obj, key) {
  delete playlist.Cole
}
