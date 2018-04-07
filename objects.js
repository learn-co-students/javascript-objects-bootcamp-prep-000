var playlist = new Object({'adele':'beep'})
function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName] = songTitle
  return playlist
}
function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
}