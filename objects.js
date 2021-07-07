var playlist = {
   "nykki heaton" : "bad intentions"
 }

 var updatePlaylist = (playlist, artist, song) => {
   playlist[artist] = song
   return playlist
 }

 var removeFromPlaylist = (playlist, artist) => {
   delete playlist[artist]
   return playlist
}
