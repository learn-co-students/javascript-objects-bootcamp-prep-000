var playlist = new Object({keys: '0'});

 function updatePlaylist(playlist, artistname, songtitle) {
  playlist[artistname] = songtitle
  return playlist
}
 function removeFromPlaylist(playlist, artistname) {
  delete playlist[artistname]
  return playlist
 }