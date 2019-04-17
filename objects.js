var playlist = {
  Artist1: 'Song 1',
  Artist2: 'Song 2',
  Artist3: 'Song 3',
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
