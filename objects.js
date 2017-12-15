var playlist = new Object({
  ['Tay-k']: 'The Race'
})
//nondestructively update obj playlist with artistName and songTitle
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({},
  playlist, {'Phil Ochs': 'Here\'s to the State of Mississippi' })
}
//Here once the function is called the artistName would be replaced by a parameter indicating which artistName is deleted
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}