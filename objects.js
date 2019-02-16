var playlist = {
  'lil wayne': 'fireman',
  'lil yachty': 'get dripped'
}
function updatePlaylist(playlist, artistName, songTitle) {
playlist[artistName] = songTitle
return playlist
}
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
