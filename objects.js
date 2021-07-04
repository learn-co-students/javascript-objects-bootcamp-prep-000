var playlist = {Dion:"Alone", Mars:"When I Was Your Man", Perry:"Firework" };
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName]=songTitle
  return playlist
}
function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
  return playlist
}