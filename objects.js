var playlist = { 'Muse': 'Absolution', 'Coheed and Cambria': 'Welcome Home' }
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}