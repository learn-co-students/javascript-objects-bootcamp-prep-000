playlist = Object.assign({}, {foo: 'bar'})

function updatePlaylist(playlist, artistName, songTitle) {
  // Add the song and artist as a key-value pair to playlist
  // return the whole playlist
  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  // Delete key-value pair from playlist
  // Return the updated playlist
  delete playlist[artistName];

  return playlist;
}
