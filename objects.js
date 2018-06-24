var playlist = {
  KanyeWest: "Runaway" 
  
}
  function updatePlaylist(playlist, x, y) {
  playlist[x] = y
}
  function removeFromPlaylist(playlist, x) {
    delete playlist[x]
  }