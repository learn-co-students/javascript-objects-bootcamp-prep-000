var playlist = {Pınar:"Dinle"}


var updatePlaylist = function(playlist, artistName, songTitle){
  return this.playlist[artistName] = songTitle;
  
}

function removeFromPlaylist (playlist, artistName){
  
  delete playlist.[artistName];
  
}

updatePlaylist();