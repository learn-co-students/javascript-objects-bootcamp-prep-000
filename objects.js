var playlist = {artist: "song"}

function updatePlaylist(playlist, artistName, songTilte){
  playlist[artistName] = songTilte
  
  return playlist
}
  
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  
  return playlist
}