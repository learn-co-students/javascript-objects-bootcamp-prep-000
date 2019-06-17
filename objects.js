// Object assignment and initialised with a key-value pair

var playlist = { 
  artistName: 'Obscura',
  songTitle: 'Anticosmic Overload'
}

// Update playlist function

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

// Function for deleting key-value pair from playlist

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}