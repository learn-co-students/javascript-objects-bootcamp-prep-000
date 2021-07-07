var playlist = { 
  artistName: 'Taylor Swift', 
  songTitle: 'Out of the Woods'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}