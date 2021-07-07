var playlist = {}
playlist['Slowdive'] = 'Alison'
playlist['My Bloody Valentine'] = 'Sometimes'

function updatePlaylist (playlist, artist, title){
  
  return Object.assign(playlist, {'Phil Ochs' : title})
}

function removeFromPlaylist(playlist, name){
  return delete playlist.Slowdive
}
