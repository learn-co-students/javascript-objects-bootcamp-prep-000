 var playlist = {artist1: "song1", artist2: "song2"}

function updatePlaylist(playlist,artistName,songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}