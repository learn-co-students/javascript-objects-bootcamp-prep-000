// define the playlist

var playlist = {
  beatles: "Abbey Road",
  metric: "Gimme Sympathy",
  radiohead: "Exit Music for a film"
  
};


  function updatePlaylist(playlist, artistName, songTitle ) {
    playlist[artistName] = songTitle;
    return playlist;
  }
  
  function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName];
    return playlist;
  }