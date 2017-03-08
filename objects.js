var playlist = {shankar:'jhumm barabar'}

function updatePlaylist(playlist, artist, song){
  playlist[artist]=song
  return playlist
}

function removeFromPlaylist(playlist, artist){
  console.log(playlist);
  var art = artist
  delete playlist[art]
  console.log(playlist);
  return playlist
}
