var playlist = {'sublime':'what i got'}
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
  }
  updatePlaylist(playlist, "311", "Love Song")
  
  function removeFromPlaylist(playlist, artistName){
    delete playlist[artistName]
    return playlist
  }