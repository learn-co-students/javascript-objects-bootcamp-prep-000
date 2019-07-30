var playlist = {
  'Julio Iglesias': 'Fragile', 
  'Celine Dion': 'The Power of Love'
}

 function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

 function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
} 