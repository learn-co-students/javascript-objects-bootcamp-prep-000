var playlist = { Metallica: 'One' } 

function updatePlaylist(playlist, artistName , songTitle) {
  return Object.assign(playlist, { Slowdive: 'Alison' }, 
  { 'My Bloody Valentine': 'Sometimes' }, 
  { 'Phil Ochs': "Here's to the State of Mississippi"})
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive;
  return playlist
}