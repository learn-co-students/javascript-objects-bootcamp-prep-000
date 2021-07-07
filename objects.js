const playlist = { 
  olp: "is anybody home",
  riahanna: "diamonds",
  galantis: "emoji"
 };
  
  function updatePlaylist(playlist, artistName, songTitle) {
   playlist[artistName] ='songTitle';
   
   return playlist;
  }
  
  
  function removeFromPlaylist(playlist, artistName) {
    delete playlist.Slowdive;
    }