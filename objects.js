var playlist = {'Slowdive': 'Alison', 'My Bloody Valentine': 'Sometimes'}

// We can only have one song per artist, because we can't duplicate the keys.

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
