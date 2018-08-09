var playlist = {artistNames:"songTitles"};
   function updatePlaylist(playlist, artistName, songTitle) 
   {
     playlist[artistName] = 'SongTitle';
      console.log(playlist);
       return playlist;
  }
  
  function removeFromPlaylist(playlist, artistName) {
    delete playlist[artistName];
     return playlist;
  }