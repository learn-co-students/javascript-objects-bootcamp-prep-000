var playlist = {
  'Tom Waits': 'Big In Japan',
  'Joni Mitchell': 'Ladies of the Canyon'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
  return playlist
}
