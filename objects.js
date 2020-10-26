var playlist = {'Murder by Death':'Brother', 'Scissor Sisters':'Take Yo Mamma Out'}; 

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
}