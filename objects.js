var playlist = {
  B2K : "Uh Huh",
  Alicia : "Teenage Love Affair",
  Chris : "Run It"
}
function updatePlaylist(playlist, name, title){
  playlist['name'] = title
  return playlist
}
function removeFromPlaylist(playlist, name){
  delete playlist['name']
  return playlist
}
