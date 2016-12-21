var playlist = {
   'Garth Brooks': 'The Thunder Rolls'
 }
function updatePlaylist(playlist, artistTitle, songTitle) {
  playlist[artistTitle] = songTitle
  return playlist
}
function removeFromPlaylist(playlist, artistName) {
   delete playlist[artistName]
   return playlist
 }
 