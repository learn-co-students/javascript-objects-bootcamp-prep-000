var playlist = { 
  "Russ": "What They Want",
  "Travis Scott": "NC-17"
  }
  
  function updatePlaylist(playlist, artistName, songTitle) {
    playlist.artistName = songTitle
    return playlist
  }
  
  function removeFromPlaylist(playlist, artistName) {
    delete playlist.artistName
    return playlist
  }