var playlist = {
  name: "Bruno Mars",
  title: "Finesse"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  
  playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  
  playlist
}