var playlist = {"Slowdive": 'Alison'
}

function updatePlaylist(playlist, artist, song){
  var newPlaylist = Object.assign({}, playlist, {[artist]: song})
  return newPlaylist
}

playlist = updatePlaylist(playlist, 'My Bloody Valentine', 'Sometimes')
playlist = updatePlaylist(playlist, 'Phil Ochs', "Here's to the State of Mississippi")
console.log(playlist)

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}

playlist = removeFromPlaylist(playlist, 'Slowdive')

console.log(playlist)