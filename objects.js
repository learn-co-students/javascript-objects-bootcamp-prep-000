var playlist = new Object({
  Beyonce: 'Lemonade',
  NeilDiamond: 'Sweet Caroline',
  Slothrust: '7:30am'
})

function updatePlaylist(playlist,artistName,songTitle) {
  return Object.assign(playlist, { [artistName]: songTitle })
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName]
  return playlist
}
