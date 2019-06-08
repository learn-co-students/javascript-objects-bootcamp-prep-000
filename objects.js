var playlist = new Object({Blur: 'Boys and Girls'});

playlist['Smashing Pumpkins'] = 'Tonight, Tonight';

function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName]=songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}