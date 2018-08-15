var playlist = {amrdiab : "2bly"}
function updatePlaylist(playlist , artist , song ) {
  playlist[artist] = song
  return playlist 
}
function updatePlaylist(playlist , artist , song ) {
  playlist[artist] = song
  return playlist 
}
function removeFromPlaylist(playlist , artist , song ) {
  delete playlist[artist]
  return playlist 
}