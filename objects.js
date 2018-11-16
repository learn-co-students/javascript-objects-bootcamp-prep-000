var playlist = {    
  Wham:"Wake me up before you go go"};
  
  
  
function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}