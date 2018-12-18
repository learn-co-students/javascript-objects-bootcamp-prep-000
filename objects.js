var playlist = {
  'The Roots': 'You Got Me',
  'Johnny Cash': 'Ring of Fire'
}


function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle

  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
}