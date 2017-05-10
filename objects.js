var playlist = new Object({Bombay_Bicycle_Club: 'Lights Out, Words Gone'})

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
