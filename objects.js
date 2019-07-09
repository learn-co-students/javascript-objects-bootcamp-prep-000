var playlist = ({'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes', 'Phil Ochs': "Here's to the State of Mississippi"})

function updatePlaylist(playlist, artistName, song){
  return Object.assign({}, playlist, {[artistName]: song})
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}