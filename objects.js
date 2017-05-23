
// artistName: songTitle
// key:        value
// artistName = key    songTitle = value
var playlist = {
  "tori amos": "bliss"
}


function updatePlaylist(playlist, artistName, songTitle) {
   playlist[artistName] = songTitle
   return playlist
 }

 function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
