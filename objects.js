var playlist = {'Jason Mraz':'Have It All'};
function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName]=songTitle 
}
function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
}
  
  