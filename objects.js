var playlist = {
  falloutboy: 'novocaine',
  flor: 'heart'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
}

// test function updatePlaylist
updatePlaylist(playlist, 'honors', 'valleys')
console.log(playlist)
playlist = {
  falloutboy: 'novocaine',
  flor: 'heart'
}


function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}

// test function removeFromPlaylist
removeFromPlayist(playlist, 'flor')
console.log(playlist)
playlist = {
  falloutboy: 'novocaine',
  flor: 'heart'
}






