var playlist = {BoysIIMen: 'Goodbye'}

function updatePlaylist(playlist, artisitName, songTitle) {
  playlist[artisitName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artisitName) {
  delete playlist[artisitName]
  return playlist
}