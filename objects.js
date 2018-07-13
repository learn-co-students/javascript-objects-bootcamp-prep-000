var playlist = {Slowdive: "Alison"}

function updatePlaylist (obj, key, pair ) {
      
    playlist['My Bloody Valentine'] = 'Sometimes'      
    playlist['Phil Ochs'] = 'Here\'s to the State of Mississippi'    
      
  return playlist
  
}


function removeFromPlaylist (obj, key) {
  
  delete playlist.Slowdive;
  
}
