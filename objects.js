var playlist = {artistname:'songtitle'}

function updatePlaylist(playlist,a,s){
  playlist[a]=s
  return playlist
}

function removeFromPlaylist(playlist,a){
  delete playlist[a]
  return playlist
}