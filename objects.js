var playlist = {acdc : "Highway"}
function updatePlaylist(playlist, name, song){
  playlist[name] = song
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
}