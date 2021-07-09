const playlist = {shakespeare: 'As You Like It'}

function updatePlaylist(playlist, name, title) {
  playlist = Object.assign(playlist, {[name]: title});
  return playlist
}

function removeFromPlaylist(playlist, name) {
  delete playlist[name]
}