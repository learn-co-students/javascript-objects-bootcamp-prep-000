var playlist = {Pınar:"Dinle"}


var updatePlaylist = function(playlist, artistName, songTitle){
  return playlist[artistName] = songTitle;
  
}

function removeFromPlaylist (playlist, artistName){
  
  delete playlist[artistName];
  return playlist;
}

updatePlaylist();