var playlist = { "Edsheeren": "Love with shape of you", "Justin Beiber": "Baby Baby", "Adelene": "Hello", "Emma Watson": "Something there"}
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
