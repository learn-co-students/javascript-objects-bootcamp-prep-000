var playlist = {
  Pink Floyd: "Roses",
  Prince: "Purple Rain",
  Green Day: "21 GUns"
}

function updatePlaylist(playlist, name, title) {
  return Object.assign({}, playlist, {[name]: title})
}

function removeFromPlaylist() {

}
