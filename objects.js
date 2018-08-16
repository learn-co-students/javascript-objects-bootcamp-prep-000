var playlist = {
  'Charleston Songz': 'One Love',
  'One More Love': 'One More Love'
}
 function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}
 function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
