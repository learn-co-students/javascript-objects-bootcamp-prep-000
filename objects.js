var playlist = {
  trufaith: 'xtc',
  natema: 'how doae it feel',
  sandra: 'secret land'
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist['Phil Ochs'] = 'Here\'s to the State of Mississippi'
  return playlist
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
