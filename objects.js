var playlist = {donMoen: 'God will make a way', travisGreene: 'He made a Way'};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
