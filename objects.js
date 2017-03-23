var playlist = {
  TheClash: 'London Calling',
  DickDale: 'Pipeline'
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, obj, { [artistname]: songTitle })
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.[artistName]
  return playlist
}
