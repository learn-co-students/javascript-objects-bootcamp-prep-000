var playlist = new Object({
  'Skinny Puppy': 'Worlock',
  'Trust': 'Capitol'
})

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]

  return playlist
}
