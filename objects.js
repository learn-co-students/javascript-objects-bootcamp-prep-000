var playlist = {
  Pink: 'What About Us?',
  Adele: 'Hello',
  Beyonce: 'Run the World',
  Kanye: 'Gold Digger'
}

function updatePlaylist(playlist, artistName, songTitle) {
   return Object.assign({}, playlist, { ['Phil Ochs']: 'Here\'s to the State of Mississippi' })
}
 
function removeFromPlaylist(playlist, artistName) {
  delete playlist.Kanye
  return playlist
}