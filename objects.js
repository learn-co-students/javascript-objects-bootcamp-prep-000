 var playlist = { "jeans wilder": "totally",
   "alan vega":"alan vega"
 }
 
 console.log(playlist)
 
 function updatePlaylist(playlist, name, song) {
   playlist[name] = song
 }
 
 function removeFromPlaylist(playlist, artistName) {
   delete playlist[artistName]
   console.log(playlist)
   return playlist
 }