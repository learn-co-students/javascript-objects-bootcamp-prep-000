var playlist = {
  Prince: "1999",
  
};

function updatePlaylist(playlist, nameOfArtist, titleOfSong) {
  playlist[nameOfArtist] = titleOfSong;
  return; 
}

function removeFromPlayList(playlist, artistName){
  delete playlist[artistName];
  return;
}



