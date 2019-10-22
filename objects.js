var playlist = {artist: 'song'}

function updatePlaylist(playlistName, artistName, songTitle) {
  return Object.assign({}, playlistName, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
