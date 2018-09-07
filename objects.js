var playlist = { ['Slowdive']: 'Alison', ['My Bloody Valentine']: 'Sometimes'};

function updatePlaylist(playlist, artistName, songTitle){
  playlist['Phil Ochs']= 'Here/s to the State of Mississippi';
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
   playlist['Phil Ochs']= 'Here/s to the State of Mississippi';
   delete playlist['Slowdive'];
  return playlist;
}