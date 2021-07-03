var playlist = new Object({artist: 'song'});

 function updatePlaylist(playlist, artist, song){
   playlist[artist] = song;
   return playlist;

 function removeFromPlaylist(playlist, name){
   delete playlist[artist]
   return playlist
 }
