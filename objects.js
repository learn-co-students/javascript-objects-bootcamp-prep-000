var playlist = {'artistName' : 'songTitle'}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign(playlist, {[artistName] : songTitle})
updatePlaylist()
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
