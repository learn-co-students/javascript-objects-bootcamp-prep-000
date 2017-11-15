var playlist = {
  Lit: "My Own Worst Enemy",
  KYLE: "iSpy"
}

function updatePlaylist(obj, artist, title){
  return Object.assign({}, obj, {[artist]:title})
}

updatePlaylist(playlist, "Beetles", "Hey Jude")

removeFromPlaylist(playlist, artist){
  delete playlist.artist
}
