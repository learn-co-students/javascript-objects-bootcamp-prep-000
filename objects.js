var playlist = new 
Object({zayn:'you and i'},{ph1:'hiphop'})

function updatePlaylist (playlist, artistName, songTitle){
  Object.assign(playlist, {[artistName]: songTitle})
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  playlist2 = {}
  delete playlist.artistName
  playlist = playlist2
  return playlist2
}