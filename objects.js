var playlist = {name: "songtitle"}

function updatePlaylist(playlist, name, songtitle) {
  return Object.assign({}, playlist, {[name]: songtitle})
}

function removeFromPlaylist(playlist, name) {
  delete playlist[name]
  return playlist
}
