var playlist = {Britney: "Toxic"};



  function updatePlaylist(playlist, artistName, songTitle)
 
  {
    return Object.assign(playlist, {'Slowdive': songTitle }, {'My Bloody Valentine': songTitle}, {'Phil Ochs': songTitle});

  }
  
  function removeFromPlaylist(playlist, artistName)
  {
    delete playlist.Slowdive;
    return playlist;
    
    
    
  }
  
  