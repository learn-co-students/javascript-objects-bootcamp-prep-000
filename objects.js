var playlist = { 
  'Slowdive': 'Alison', 
  'My Bloody Valentine': 'Sometimes', 
  'Phil Ochs': "Here's to the State of Mississippi"
}

function updatePlaylist (playlist, artistName, songTitle) {
  playlist [artistName] = songTitle
  return playlist
}


function removeFromPlaylist (playlist, artistName) {
  delete playlist[artistName]
  return playlist
}

//Create a function removeFromPlaylist that accepts two arguments (the playlist object and the artist name). The body of the function should delete the key-value pair from the playlist and return the updated playlist.