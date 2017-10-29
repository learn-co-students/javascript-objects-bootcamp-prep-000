var playlist = new Object({ name: "titles" });

function updatePlaylist(playlist, name, titles) {

  return Object.assign({}, playlist, { [name]: titles })
}

function removeFromPlaylist(playlist, name) {
  delete playlist[name]
  return playlist
}
