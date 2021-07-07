var playlist = new Object ({'Fleetwood_Mac': 'Rihannon'});

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist
}


function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
