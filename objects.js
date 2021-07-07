var playlist = {artistName:"Song Title"}
function updatePlaylist(Playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
}
  
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}