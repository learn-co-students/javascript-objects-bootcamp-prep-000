var playlist = { 
  artist: 'song'
}


function updatePlaylist(obj, key, value) {
  obj[key] = value
  
  return obj
}

updatePlaylist(playlist, 'Phil Ochs', 'Here\'s to the State of Mississippi')

updatePlaylist(playlist, 'Slowdive', 'Alison')

console.log(playlist)


function removeFromPlaylist(obj, key) {
  
  delete playlist.Slowdive

  return obj
  
}

console.log(playlist)
