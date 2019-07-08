var playlist = 
  {
    ["The Beatles"]: "Penny Lane",
    ["The Rolling Stones"]: "Paint it Black",
    ["The Who"]: "Pinball Wizard"
  };
  
  function updatePlaylist(playlist, artistName, songTitle) {
    playlist[artistName] = songTitle;
    return playlist;
  }
  
  function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName];
    return playlist;
  }