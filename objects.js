var playlist = {
  artist: 'songTitle'
}

function updatePlaylist(playlist, artist, song) {
  // Remember, because one of this function's arguments
  // is `playlist`, the `playlist` _inside_ the function
  // is not the same as the top-level `playlist` outside
  // the function
  playlist[artist] = song

  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
