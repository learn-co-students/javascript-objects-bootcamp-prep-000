// define an object called 'playlist'
var playlist = {name: "song"};

// creates a function that adds key-value pairs for artists & their songs
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

// creates a function that removes an artist from the playlist
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
