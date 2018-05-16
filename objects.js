var playlist={
 artistName:"songsTitle"

}
function updatePlaylist(playlist, artist, song){
  playlist[artist]=song
  return playlist
}

function removeFromPlaylist(playlist, x){
  delete playlist[x]
  return playlist
}
