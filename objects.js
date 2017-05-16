var playlist = {
  'Mariah Carey': 'Hero',
  'Christina Aguilera': 'Genie in a Bottle'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
