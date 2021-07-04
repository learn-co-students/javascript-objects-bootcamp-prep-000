var playlist = {
  Metallica: 'Ride the Lighting',
  "Carl Orff": 'O Fortuna'
  
}

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  
  return playlist
}

function removeFromPlaylist (playlist, artistName){
  delete playlist[artistName]
  
  return playlist
}