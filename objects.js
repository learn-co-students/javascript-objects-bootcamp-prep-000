var playlist = { "My Bloody Valentine": 'goodbye angels', 'Phil Ochs': 'hey', 'Slowdive': 'hiya' }
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive
}