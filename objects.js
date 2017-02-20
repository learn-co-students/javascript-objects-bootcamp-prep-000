var playlist = new Object({
  drake: ['One Dance'],
  jayZ: ['Empire State']
});

var updatePlaylist = function(playlist, newArtist, newSongs){
  playlist[newArtist] = newSongs;
  return playlist;
}

var removeFromPlaylist = function(playlist, artistName){
  delete playlist[artistName];
  return playlist;
}
