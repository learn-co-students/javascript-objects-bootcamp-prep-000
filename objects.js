var playlist = {
  Bastille: "Pompeii",
  Aerosmith: "Cryin\'"
}
function updatePlaylist(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

updatePlaylist(playlist, 'Taylor Swift', 'Style')

function removeFromPlaylist(play, artistName) {
  delete play.artistName
  play
}
