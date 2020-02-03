var playlist = {
  fugazi: "repeater"
  }
  
  function updatePlaylist(playlist, a, b) {
    playlist[a] = b; 
    return playlist
  }
  
  function removeFromPlaylist(playlist, a) {
    delete playlist [a]; 
    return playlist 
      }
  