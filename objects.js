var playlist = { 
    Beyonce : "Single LBeyonce",
     
    "Erykah Badu" : "Next Lifetime"
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  
  return playlist
}

function  removeFromPlaylist(playlist, artistName) {
  
  delete playlist[artistName]
}