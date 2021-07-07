var playlist = { 
  Coldplay: "The Scientist",
  Drake: "In My Feels",
  Migos: "Narcos"
}

function updatePlaylist(playlist, artistName, songTitle){
playlist[artistName] = songTitle; 
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
}