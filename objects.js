var playlist = {
  Elvis: 'Don\'t be Cruel',
  Devo: 'some song',
  MrOizo: 'Steack'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return
}