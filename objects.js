var playlist = {
  'Hall and Oasts': 'Rich Girl',
  'Beatles': 'She Came in Through the Bathroom Window'
}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle

  return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]

  return playlist
}
