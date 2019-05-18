var playlist  = {
  Adele : 'Someone like you',
  Beyonce: 'Best Thing I Never Had'
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
delete playlist[artistName];
return playlist;
}
