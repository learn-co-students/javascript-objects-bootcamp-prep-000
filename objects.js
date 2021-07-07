var playlist = {artist:'song'}

//adding key value
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
  
}

//removing key value
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
  
}