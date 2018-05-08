var playlist = { artistname:"song titles"}

function updatePlaylist(playlist,artistname,songtitle) {
playlist[artistname]=songtitle
return playlist
 }
 
 function removeFromPlaylist(playlist,artistname) {
  delete artistname
  return playlist

 }