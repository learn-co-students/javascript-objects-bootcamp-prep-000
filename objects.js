let playlist={artist:'song'}
function updatePlaylist(playlist, artist,songTitle){
  playlist[artist]=songTitle;
  return playlist
}
function removeFromPlaylist(playlist,artistName){
   delete playlist[artistName]
   return playlist
}