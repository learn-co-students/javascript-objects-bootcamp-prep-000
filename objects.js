var playlist = {'artist names': 'song titles'};

function updatePlaylist ( playlist, artistName, song){
  return (playlist [artistName] = song);
}

function removeFromPlaylist (playlist, artistName){
  delete playlist [artistName];
  return ([playlist]);
}
