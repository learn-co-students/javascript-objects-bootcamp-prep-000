
 var playlist = {artistName: "songTitle"}

 
 function updatePlaylist(obj,artistname,songtitle) 
 {
   playlist[artistname]=songtitle
   return playlist
   
 }
 
 removeFromPlaylist
 
 function removeFromPlaylist(obj,artistname) 
 {
   delete playlist[artistname]
   return playlist
   
 }
 