var playlist = {
  Drake: 'Forever',
  Adele: 'Hello'
}

function updatePlaylist(obj, artistName, songTitle) {
  return Object.assign(obj, {[artistName]:songTitle})
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName]
  return playlist
}