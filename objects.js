var playlist = {
  "Beyonce": "Love on Top",
  "Katy": "Firework",
  "Drake": "Fake Love"
  }
  
  function updatePlaylist(playlist,artist, song){
    playlist[artist] = song
    return playlist
  }
  function removeFromPlaylist(playlist, artistName){
    delete playlist[artistName];
    return playlist;
  }